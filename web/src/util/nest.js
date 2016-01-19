export function nestArticle(article, tags) {
    return {
        ...article,
        // map tag ids to actual tag objects
        tags: article.tags.map(id => tags[id]),
    }
}
