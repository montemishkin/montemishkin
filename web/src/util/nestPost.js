export default (post, tags) => ({
    ...post,
    // map tag ids to actual tag objects
    tags: post.tags.map(id => tags[id]),
})
