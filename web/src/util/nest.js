// third party imports
// import transform from 'lodash/object/transform'


export function nestProject(project, tags) {
    return {
        ...project,
        link: `/projects/${project.slug}`,
        tags: project.tags
            // map tag ids to actual tag objects
            .map(id => tags.filter(tag => tag.id === id)[0])
            // map tag objects to also include permanent link
            .map(tag => ({
                link: `/tags/${tag.slug}`,
                title: tag.title,
                description: tag.description,
            })),
    }
}


export function nestPost(post, tags) {
    return {
        ...post,
        link: `/posts/${post.slug}`,
        tags: post.tags
            // map tag ids to actual tag objects
            .map(id => tags.filter(tag => tag.id === id)[0])
            // map tag objects to also include permanent link
            .map(tag => ({
                link: `/tags/${tag.slug}`,
                title: tag.title,
                description: tag.description,
            })),
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
