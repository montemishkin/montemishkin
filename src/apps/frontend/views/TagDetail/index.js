// third party imports
import React, {Component} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// import DisqusThread from 'react-disqus-thread'
// local imports
import styles from './styles'
import List from 'components/List'
import ArticlePreview from 'components/ArticlePreview'
import Banner from 'components/Banner'
import {nestProject, nestPost} from 'util/nest'


// TODO: this should be a reselect selector
function mapStateToProps({tags, projects, posts}, {params: {slug}}) {
    const desiredTag = tags.filter(tag => tag.slug === slug)[0]

    function tagFilter(id) {
        return id === desiredTag.id
    }

    return {
        tag: desiredTag,
        projects: projects
            // grab only the projects with the desired tag
            .filter(project => project.tags.filter(tagFilter).length > 0)
            // nest the projects
            .map(project => nestProject(project, tags)),
        posts: posts
            // grab only the posts with the desired tag
            .filter(post => post.tags.filter(tagFilter).length > 0)
            // nest the posts
            .map(post => nestPost(post, tags)),
    }
}


@connect(mapStateToProps)
@radium
export default class TagDetail extends Component {
    static propTypes = {
        // TODO
    }


    render() {
        const {
            tag: {title},
            projects,
            posts,
        } = this.props

        return (
            <section>
                <Banner
                    style={styles.banner}
                    imageSrc='/static/images/bird-logo.png'
                    title={title}
                    subtitle='longer description of the tag'
                />
                <section>
                    <h3>
                        Projects ({projects.length})
                    </h3>
                    <List>
                        {projects.map(project => <ArticlePreview {...project} />)}
                    </List>
                </section>
                <section>
                    <h3>
                        Blog Posts ({posts.length})
                    </h3>
                    <List>
                        {posts.map(post => <ArticlePreview {...post} />)}
                    </List>
                </section>
            </section>
        )
    }
}
