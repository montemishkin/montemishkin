// third party imports
import flatten from 'lodash/array/flatten'


function normalizeAndSplit(s) {
    return s.trim().toLowerCase().split(' ').filter(entry => entry !== '')
}


export default (searchText, list, mapItemToFields = x => x, sortEqualScores) => {
    // terms to search for
    const terms = normalizeAndSplit(searchText)
    let anyHaveScored = false

    // start of with the given list of items to search through
    let result = list

    // map items to index entries
    result = result.map(item => {
        // fields to search within for terms
        const fields = flatten(mapItemToFields(item).map(normalizeAndSplit))
        // current item's score (higher means more matched to search)
        let score = 0

        for (const field of fields) {
            for (const term of terms) {
                if (field.indexOf(term) !== -1) {
                    score++
                    anyHaveScored = true
                }
            }
        }

        return {
            score,
            item,
        }
    })

    // sort entries by score (higher score first)
    result = result.sort(
        ({score: score1, item: item1}, {score: score2, item: item2}) => {
            if (score1 > score2) {
                return -1
            } else if (score1 < score2) {
                return 1
            // if scores are equal and custom tie breaker has been provided
            } else if (sortEqualScores) {
                // use tie breaker to sort index entries with equal score
                return sortEqualScores(item1, item2)
            }

            return 1
        }
    )

    // if any of the entries scored
    if (anyHaveScored) {
        // filter out entries that didn't score
        result = result.filter(({score}) => score > 0)
    }

    // map index entries back to items
    result = result.map(({item}) => item)

    return result
}
