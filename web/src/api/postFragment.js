export default `fragment postFragment on Post {
    slug
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
        ...tagFragment
    }
}`
