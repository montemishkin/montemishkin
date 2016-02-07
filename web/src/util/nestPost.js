export default (post, tags) => {
    if (typeof post === 'undefined') {
        // return `undefined` if `post` is `undefined`
        return void 0
    }

    const nestedPost = {...post}

    // if `tags` were given, `post` exists, and `post` has list of tag ids
    if (tags && !post.doesNotExist && Array.isArray(post.tags)) {
        // map tag ids to actual tag objects
        nestedPost.tags = post.tags.map(id => tags[id])
    }

    return nestedPost
}
