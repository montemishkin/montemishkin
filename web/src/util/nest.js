export function nestArticle(article, tags) {
    return {
        ...article,
        // map tag ids to actual tag objects
        tags: article.tags.map(id => tags.filter(tag => tag.id === id)[0]),
    }
}
