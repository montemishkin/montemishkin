// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// import DisqusThread from 'react-disqus-thread'
// local imports
import styles from './styles'
import List from 'components/List'
import NotFound from 'components/NotFound'
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
        projects: desiredTag && projects
            // grab only the projects with the desired tag
            .filter(project => project.tags.filter(tagFilter).length > 0)
            // nest the projects
            .map(project => nestProject(project, tags)),
        posts: desiredTag && posts
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
        // didnt use `isRequired` since we use undefined to indicate not found
        tag: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
        }),
        projects: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.array,
        ]).isRequired,
        posts: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.array,
        ]).isRequired,
    }


    get notFoundContent() {
        return <NotFound />
    }


    get foundContent() {
        const {
            tag: {title, description},
            projects,
            posts,
        } = this.props

        return (
            <section>
                <Banner
                    style={styles.banner}
                    imageSrc='/static/images/bird-logo.png'
                    title={title}
                    subtitle={description}
                />
                <section>
                    <h3>
                        Projects ({projects.length})
                    </h3>
                    <List>
                        {projects.map((project, key) => (
                            <ArticlePreview {...project} key={key} />
                        ))}
                    </List>
                </section>
                <section>
                    <h3>
                        Blog Posts ({posts.length})
                    </h3>
                    <List>
                        {posts.map((post, key) => (
                            <ArticlePreview {...post} key={key}/>
                        ))}
                    </List>
                </section>
            </section>
        )
    }


    render() {
        if (this.props.tag) {
            return this.foundContent
        }
        return this.notFoundContent
    }
}
