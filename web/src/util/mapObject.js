import reduce from 'lodash/collection/reduce'


export default (objBefore, mapping) => reduce(objBefore, (objAfter, val, key) => {
    return {
        ...objAfter,
        [key]: mapping(val, key, objBefore),
    }
}, {})
