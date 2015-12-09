// third party imports
// import transform from 'lodash/object/transform'


export function nestArticle(article, tags) {
    return {
        ...article,
        // map tag ids to actual tag objects
        tags: article.tags.map(id => tags.filter(tag => tag.id === id)[0]),
    }
}


// export default function nest(nestee, data) {
//     // transform over the given data
//     return transform(data, (state, value, key) => ({
//         ...state,
//         [key]: state[key].map(
//             id => value.filter(
//                 item => item.id === id
//             )[0]
//         )
//     }), nestee)
// }
