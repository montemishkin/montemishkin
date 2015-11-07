// third party imports
import flatten from 'lodash/array/flatten'


function normalizeAndSplit(s) {
    return s.trim().toLowerCase().split(' ')
}


export default (searchText, list, mapItemToFields = x => x) => {
    const terms = normalizeAndSplit(searchText)

    // map items to index entries
    return list.map(item => {
        const fields = flatten(mapItemToFields(item).map(normalizeAndSplit))
        let score = 0

        for (const field of fields) {
            for (const term of terms) {
                if (field.indexOf(term) !== -1) {
                    score++
                }
            }
        }

        return {
            score,
            item,
        }
    // sort by score (higher scores first)
    }).sort(
        ({score: score1}, {score: score2}) => score1 > score2 ? -1 : 1
    // filter out zero score
    ).filter(
        ({score}) => score > 0
    // map index entries back to items
    ).map(
        ({item}) => item
    )
}
