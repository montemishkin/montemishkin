// node imports
import path from 'path'
// third party imports
import mapValues from 'lodash/object/mapValues'




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




export default ({
    prefix = '',
    queryAll = () => Promise.resolve(),
    queryBySlug = () => Promise.resolve(),
    processAll = () => {},
    mapAllToItems = x => x,
    processBySlug = () => {},
    mapBySlugToItems = x => x,
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
                    processAll(data, dispatch)

                    return mapAllToItems(data)
                })
                .then(items => dispatch(mergeAll(items)))
                .catch(error => dispatch(failFetchAll(error)))
        }
    }

    function fetchAllIfNeeded() {
        return (dispatch, getState) => {
            const {isLoading, loadDateTime} = getState()[prefix]

            if (!isLoading && typeof loadDateTime === 'undefined') {
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
                    processBySlug(data, dispatch)

                    return mapBySlugToItems(data)
                })
                .then(items => dispatch(mergeBySlug(items)))
                .catch(error => dispatch(failFetchBySlug(error, ...slugs)))
        }
    }

    function fetchBySlugIfNeeded(...slugs) {
        return (dispatch, getState) => {
            const {items} = getState()[prefix]
            const neededSlugs = slugs.filter(slug => {
                const item = items[slug]

                return typeof item === 'undefined' || (
                    !item.isLoading && typeof item.loadDateTime === 'undefined'
                )
            })

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
                    items: mapValues(state.items, item =>
                        action.slugs.indexOf(item.slug) === -1
                            ? item
                            : entityAsLoading(item)
                    ),
                }
            case MERGE_ALL:
                return {
                    ...entityAsLoaded(state, action.dateTime),
                    items: {
                        ...state.items,
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
                return entityAsErrored(state)
            case FAIL_FETCH_BY_SLUG:
                // only set specified items to error
                return {
                    ...state,
                    items: mapValues(state.items, item =>
                        action.slugs.indexOf(item.slug) === -1
                            ? item
                            : entityAsErrored(item)
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
