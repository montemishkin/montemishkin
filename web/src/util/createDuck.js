// node imports
import path from 'path'
// third party imports
import mapValues from 'lodash/object/mapValues'


// TODO: make this more granular and easily testable




function entityAsLoading(entity) {
    return {
        ...entity,
        isLoading: true,
        loadError: void 0,
    }
}


function entityAsLoaded(entity, dateTime) {
    return {
        ...entity,
        isLoading: false,
        loadError: void 0,
        loadDateTime: dateTime,
    }
}


function entityAsErrored(entity, error) {
    return {
        ...entity,
        isLoading: false,
        loadError: error,
    }
}


function entityAsNonexistant(entity) {
    return {
        ...entity,
        doesNotExist: true,
    }
}




export default ({
    prefix = '',
    queryAll = () => Promise.resolve(),
    queryBySlug = () => Promise.resolve(),
    processData = () => {},
    mapDataToItems = x => x,
}) => {
    // Action Types

    const REQUEST_ALL = path.join(prefix, 'REQUEST_ALL')
    const MERGE_ALL = path.join(prefix, 'MERGE_ALL')
    const FAIL_FETCH_ALL = path.join(prefix, 'FAIL_FETCH_ALL')

    const REQUEST_BY_SLUG = path.join(prefix, 'REQUEST_BY_SLUG')
    const MERGE_BY_SLUG = path.join(prefix, 'MERGE_BY_SLUG')
    const FAIL_FETCH_BY_SLUG = path.join(prefix, 'FAIL_FETCH_BY_SLUG')


    // Action Creators

    function requestAll() {
        return {
            type: REQUEST_ALL,
        }
    }

    function mergeAll(items) {
        return {
            type: MERGE_ALL,
            dateTime: Date.now(),
            items,
        }
    }

    function failFetchAll(error) {
        return {
            type: FAIL_FETCH_ALL,
            error,
        }
    }

    function fetchAll() {
        return dispatch => {
            dispatch(requestAll())

            return queryAll()
                .then(data => {
                    processData(data, dispatch)

                    return mapDataToItems(data)
                })
                .then(items => dispatch(mergeAll(items)))
                .catch(error => dispatch(failFetchAll(error)))
        }
    }

    function fetchAllIfNeeded() {
        return (dispatch, getState) => {
            const {isLoading, loadDateTime, loadError} = getState()[prefix]

            if (loadError || (!isLoading && !loadDateTime)) {
                return dispatch(fetchAll())
            }

            return Promise.resolve()
        }
    }

    function requestBySlug(...slugs) {
        return {
            type: REQUEST_BY_SLUG,
            slugs,
        }
    }

    function mergeBySlug(items) {
        return {
            type: MERGE_BY_SLUG,
            dateTime: Date.now(),
            items,
        }
    }

    function failFetchBySlug(error, ...slugs) {
        return {
            type: FAIL_FETCH_BY_SLUG,
            error,
            slugs,
        }
    }

    function fetchBySlug(...slugs) {
        return dispatch => {
            dispatch(requestBySlug(...slugs))

            return queryBySlug(...slugs)
                .then(data => {
                    processData(data, dispatch)

                    return mapDataToItems(data)
                })
                .then(items => slugs.reduce((current, slug) => ({
                    ...current,
                    [slug]: typeof current[slug] === 'undefined'
                        ? entityAsNonexistant({})
                        : current[slug],
                }), items))
                .then(items => dispatch(mergeBySlug(items)))
                .catch(error => dispatch(failFetchBySlug(error, ...slugs)))
        }
    }

    function fetchBySlugIfNeeded(...slugs) {
        return (dispatch, getState) => {
            const {items} = getState()[prefix]
            const neededSlugs = slugs.filter(
                slug => !items[slug] || items[slug].loadError
            )

            if (neededSlugs.length === 0) {
                return Promise.resolve()
            }

            return dispatch(fetchBySlug(...neededSlugs))
        }
    }


    // Reducer

    const defaultState = {
        items: {},
        isLoading: false,
        loadError: void 0,
        loadDateTime: void 0,
    }

    function reducer(previousState, action) {
        const state = {...defaultState, ...previousState}

        switch (action.type) {
            case REQUEST_ALL:
                // set entire state to be loading
                return entityAsLoading(state)
            case REQUEST_BY_SLUG:
                // only set specified items to be loading
                return {
                    ...state,
                    items: {
                        // set each slug to have (otherwise empty) loading entity
                        ...action.slugs.reduce((acc, slug) => ({
                            ...acc,
                            [slug]: entityAsLoading({}),
                        }), {}),
                        // if an entity for the slug already exists,
                        // set that entity to be loading
                        ...mapValues(state.items, item =>
                            action.slugs.indexOf(item.slug) === -1
                                ? item
                                : entityAsLoading(item)
                        ),
                    },
                }
            case MERGE_ALL:
                return {
                    // mark the entire state as loaded
                    ...entityAsLoaded(state, action.dateTime),
                    items: {
                        ...state.items,
                        // mark each individual item as loaded
                        ...mapValues(action.items,
                            item => entityAsLoaded(item, action.dateTime)
                        ),
                    },
                }
            case MERGE_BY_SLUG:
                return {
                    ...state,
                    items: {
                        ...state.items,
                        ...mapValues(action.items,
                            item => entityAsLoaded(item, action.dateTime)
                        ),
                    },
                }
            case FAIL_FETCH_ALL:
                // set entire state to error
                return entityAsErrored(state, action.error)
            case FAIL_FETCH_BY_SLUG:
                // only set specified items to error
                return {
                    ...state,
                    items: mapValues(state.items, (item, slug) =>
                        action.slugs.indexOf(slug) === -1
                            ? item
                            : entityAsErrored(item, action.error)
                    ),
                }
            default:
                return state
        }
    }


    // return only what needs to be exposed
    return {
        requestAll,
        mergeAll,
        failFetchAll,
        fetchAll,
        fetchAllIfNeeded,

        requestBySlug,
        mergeBySlug,
        failFetchBySlug,
        fetchBySlug,
        fetchBySlugIfNeeded,

        reducer,
    }
}
