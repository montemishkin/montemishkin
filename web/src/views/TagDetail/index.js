// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
// local imports
import styles from './styles'
import TabContainer from './TabContainer'
import WideList from 'components/WideList'
import NotFound from 'views/NotFound'
import ArticlePreview from 'components/ArticlePreview'
import Banner from 'components/Banner'
import nestPost from 'util/nestPost'


function mapStateToProps({tags, posts}, {location: {pathname}}) {
    const desiredTag = tags.filter(tag => tag.url === pathname)[0]
    const filteredPosts = desiredTag && posts
        // grab only the posts with the desired tag
        .filter(
            post => post.tags.filter(
                id => id === desiredTag.id
            ).length > 0
        )
        // nest the posts
        .map(post => nestPost(post, tags))

    return {
        tag: desiredTag && desiredTag,
        posts: filteredPosts,
    }
}


@connect(mapStateToProps)
@radium
export default class TagDetail extends Component {
    static propTypes = {
        tag: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
            url: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })]).isRequired,
        posts: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(
            PropTypes.shape({
                url: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                subtitle: PropTypes.string,
                created: PropTypes.shape({
                    year: PropTypes.number.isRequired,
                    month: PropTypes.number.isRequired,
                    day: PropTypes.number.isRequired,
                }).isRequired,
                tags: PropTypes.arrayOf(PropTypes.shape({
                    url: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                    description: PropTypes.string.isRequired,
                })).isRequired,
            })
        )]).isRequired,
    }


    get notFoundContent() {
        return <NotFound {...this.props} />
    }


    get foundContent() {
        const {
            tag: {name, description},
            posts,
            ...unusedProps,
        } = this.props

        return (
            <section {...unusedProps}>
                <Helmet title={name} />
                <Banner
                    Icon={props => <i {...props} className='fa fa-tag' />}
                    title={name}
                    subtitle={description}
                />
                <TabContainer
                    initialActiveIndex={0}
                    tabs={[
                        {
                            Title: (props) => (
                                <Title
                                    {...props}
                                    title='Blog Posts'
                                    count={posts.length}
                                />
                            ),
                            Content: (props) => (
                                <WideList {...props}>
                                    {posts.length === 0
                                        ? 'There are no posts with this tag.'
                                        : posts.map((post, key) => (
                                            <ArticlePreview {...post} key={key} />
                                        ))
                                    }
                                </WideList>
                            ),
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



const Title = radium(function Title({title, count, style, ...unusedProps}) {
    return (
        <div
            {...unusedProps}
            style={[
                style,
                styles.tabTitleContainer,
            ]}
        >
            <span style={styles.tabTitleContent}>
                {title}
            </span>
            <span style={styles.tabTitleCount}>
                {count}
            </span>
        </div>
    )
})
