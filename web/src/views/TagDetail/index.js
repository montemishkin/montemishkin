// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import TabContainer from './TabContainer'
import WideList from 'components/WideList'
import NotFound from 'views/NotFound'
import ArticlePreview from 'components/ArticlePreview'
import Banner from 'components/Banner'
import MainLogo from 'components/Logos/Main'
import {nestProject, nestPost} from 'util/nest'
import colors from 'assets/styles/js/colors'


// TODO: this should be a reselect selector
function mapStateToProps({tags, projects, posts}, {params: {slug}}) {
    const desiredTag = tags.filter(tag => tag.slug === slug)[0]

    function tagFilter(id) {
        return id === desiredTag.id
    }

    return {
        tag: desiredTag && desiredTag,
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
        tag: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
        })]).isRequired,
        projects: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(
            PropTypes.shape({
                link: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                subtitle: PropTypes.string,
                content: PropTypes.string.isRequired,
                creationDate: PropTypes.string.isRequired,
                tags: PropTypes.arrayOf(PropTypes.shape({
                    link: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                })).isRequired,
            })
        )]).isRequired,
        posts: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(
            PropTypes.shape({
                link: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                subtitle: PropTypes.string,
                content: PropTypes.string.isRequired,
                creationDate: PropTypes.string.isRequired,
                tags: PropTypes.arrayOf(PropTypes.shape({
                    link: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                })).isRequired,
            })
        )]).isRequired,
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

        // default to having projects tab start as active
        let initialActiveIndex = 0
        // if there are no related projects
        if (projects.length === 0) {
            // then have posts tab start as active instead
            initialActiveIndex = 1
        }

        const projectsContent = (
            <WideList>
                {projects.length === 0
                    ? 'There are no projects with this tag.'
                    : projects.map((project, key) => (
                        <ArticlePreview {...project} key={key} />
                    ))
                }
            </WideList>
        )
        const postsContent = (
            <WideList>
                {posts.length === 0
                    ? 'There are no posts with this tag.'
                    : posts.map((post, key) => (
                        <ArticlePreview {...post} key={key} />
                    ))
                }
            </WideList>
        )

        return (
            <section>
                <Banner
                    style={{backgroundColor: colors.palette.random().css()}}
                    Icon={props => <MainLogo {...props} />}
                    title={title}
                    subtitle={description}
                />
                <TabContainer
                    initialActiveIndex={initialActiveIndex}
                    tabs={[
                        {
                            title: `Projects (${projects.length})`,
                            content: projectsContent,
                        }, {
                            title: `Blog Posts (${posts.length})`,
                            content: postsContent,
                        },
                    ]}
                />
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
