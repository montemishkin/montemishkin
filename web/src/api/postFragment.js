export default `fragment postFragment on Post {
    slug
    title
    subtitle
    content
    created {
        year
        month
        day
    }
    tags {
        ...tagFragment
    }
}`
