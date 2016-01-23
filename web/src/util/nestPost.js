export default (post, tags) => ({
    ...post,
    // if post exists
    tags: typeof post !== 'undefined' && !post.doesNotExist
        // map tag ids to actual tag objects
        ? post.tags.map(id => tags[id])
        // otherwise undefined
        : void 0,
})
