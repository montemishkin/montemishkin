// third party imports
import {Schema, arrayOf} from 'normalizr'


const tagSchema = new Schema('tags', {idAttribute: 'slug'})

const postSchema = new Schema('posts', {idAttribute: 'slug'})
postSchema.define({
    tags: arrayOf(tagSchema),
})

export default {
    posts: arrayOf(postSchema),
    postsBySlug: arrayOf(postSchema),
    tags: arrayOf(tagSchema),
    tagsBySlug: arrayOf(tagSchema),
}
