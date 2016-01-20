// TODO: test this and/or use moment.js
export default (a, b) => {
    if (a.year > b.year) {
        return -1
    } else if (a.year < b.year) {
        return 1
    } else if (a.month > b.month) {
        return -1
    } else if (a.month < b.month) {
        return 1
    } else if (a.day > b.day) {
        return -1
    } else if (a.day < b.day) {
        return 1
    }
    return 0
}
