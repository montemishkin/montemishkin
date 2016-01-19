export default `fragment articleFragment on Article {
    id
    url
    title
    subtitle
    content
    bannerImage {
        url
    }
    created {
        year
        month
        day
    }
    tags {
        id
        url
        name
        description
    }
}`
