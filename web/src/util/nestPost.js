export default (post, tags) => typeof post === 'undefined'
    // return `undefined` if `post` is `undefined`
    ? void 0
    // post is not `undefined`
    : {
        ...post,
        // if post exists and has list of tag ids
        tags: !post.doesNotExist && Array.isArray(post.tags)
            // map tag ids to actual tag objects
            ? post.tags.map(id => tags[id])
            // otherwise undefined
            : void 0,
    }
