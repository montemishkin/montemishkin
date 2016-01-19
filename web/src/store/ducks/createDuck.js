// node imports
import path from 'path'
// local imports
import mapObject from 'util/mapObject'




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
    queryById = () => Promise.resolve(),
    processAll = () => {},
    mapAllToItems = x => x,
    processById = () => {},
    mapByIdToItems = x => x,
}) => {
    // Action Types

    const REQUEST_ALL = path.join(prefix, 'REQUEST_ALL')
    const MERGE_ALL = path.join(prefix, 'MERGE_ALL')
    const FAIL_FETCH_ALL = path.join(prefix, 'FAIL_FETCH_ALL')

    const REQUEST_BY_ID = path.join(prefix, 'REQUEST_BY_ID')
    const MERGE_BY_ID = path.join(prefix, 'MERGE_BY_ID')
    const FAIL_FETCH_BY_ID = path.join(prefix, 'FAIL_FETCH_BY_ID')


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

    function requestById(...ids) {
        return {
            type: REQUEST_BY_ID,
            ids,
        }
    }

    function mergeById(items) {
        return {
            type: MERGE_BY_ID,
            dateTime: Date.now(),
            items,
        }
    }

    function failFetchById(error, ...ids) {
        return {
            type: FAIL_FETCH_BY_ID,
            error,
            ids,
        }
    }

    function fetchById(...ids) {
        return dispatch => {
            dispatch(requestById(...ids))

            return queryById(...ids)
                .then(data => {
                    processById(data, dispatch)

                    return mapByIdToItems(data)
                })
                .then(items => dispatch(mergeById(items)))
                .catch(error => dispatch(failFetchById(error, ...ids)))
        }
    }

    function fetchByIdIfNeeded(...ids) {
        return (dispatch, getState) => {
            const {items} = getState()[prefix]
            const neededIds = ids.filter(id => {
                const item = items[id]

                return typeof item === 'undefined' || (
                    !item.isLoading && typeof item.loadDateTime === 'undefined'
                )
            })

            return dispatch(fetchById(...neededIds))
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
            case REQUEST_BY_ID:
                // only set specified items to be loading
                return {
                    ...state,
                    items: mapObject(state.items, item =>
                        action.ids.indexOf(item.id) === -1
                            ? item
                            : entityAsLoading(item)
                    ),
                }
            case MERGE_ALL:
                return {
                    ...entityAsLoaded(state, action.dateTime),
                    items: {
                        ...state.items,
                        ...mapObject(action.items,
                            item => entityAsLoaded(item, action.dateTime)
                        ),
                    },
                }
            case MERGE_BY_ID:
                return {
                    ...state,
                    items: {
                        ...state.items,
                        ...mapObject(action.items,
                            item => entityAsLoaded(item, action.dateTime)
                        ),
                    },
                }
            case FAIL_FETCH_ALL:
                // set entire state to error
                return entityAsErrored(state)
            case FAIL_FETCH_BY_ID:
                // only set specified items to error
                return {
                    ...state,
                    items: mapObject(state.items, item =>
                        action.ids.indexOf(item.id) === -1
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

        requestById,
        mergeById,
        failFetchById,
        fetchById,
        fetchByIdIfNeeded,

        reducer,
    }
}
