// third party imports
import {Schema, arrayOf} from 'normalizr'


const tagSchema = new Schema('tags', {idAttribute: 'url'})

const postSchema = new Schema('posts', {idAttribute: 'url'})
postSchema.define({
    tags: arrayOf(tagSchema),
})

export default {
    posts: arrayOf(postSchema),
    postsById: arrayOf(postSchema),
    tags: arrayOf(tagSchema),
    tagsById: arrayOf(tagSchema),
}
