// third party imports
import {Schema, arrayOf} from 'normalizr'


const tagSchema = new Schema('tags', {idAttribute: 'url'})

const postSchema = new Schema('posts', {idAttribute: 'url'})
postSchema.define({
    tags: arrayOf(tagSchema),
})

const projectSchema = new Schema('projects', {idAttribute: 'url'})
projectSchema.define({
    tags: arrayOf(tagSchema),
})

export default {
    projects: arrayOf(projectSchema),
    projectsById: arrayOf(projectSchema),
    posts: arrayOf(postSchema),
    postsById: arrayOf(postSchema),
    tags: arrayOf(tagSchema),
    tagsById: arrayOf(tagSchema),
}
