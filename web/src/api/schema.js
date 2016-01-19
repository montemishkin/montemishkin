// third party imports
import {Schema, arrayOf} from 'normalizr'


const tagSchema = new Schema('tags')

const postSchema = new Schema('posts')
postSchema.define({
    tags: arrayOf(tagSchema),
})

const projectSchema = new Schema('projects')
projectSchema.define({
    tags: arrayOf(tagSchema),
})

export default {
    projects: arrayOf(projectSchema),
    posts: arrayOf(postSchema),
}
