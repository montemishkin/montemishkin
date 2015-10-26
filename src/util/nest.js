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
            })),
    }
}
