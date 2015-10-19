// third party imports
import express from 'express'
// local imports
import PostViewSet from './PostViewSet'
import ProjectViewSet from './ProjectViewSet'
import TagViewSet from './TagViewSet'


const app = express()


app.use('/posts', PostViewSet)
app.use('/projects', ProjectViewSet)
app.use('/tags', TagViewSet)


export default app
