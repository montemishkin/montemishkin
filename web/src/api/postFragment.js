export default `fragment postFragment on Post {
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
