// node imports
import {basename} from 'path'
// third party imports
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
// import {createSelector} from 'reselect'
// local imports
import NotFound from 'views/NotFound'
import DetailView from 'components/DetailView'
import Article from 'components/Article'
import nestPost from 'util/nestPost'
import {fetchBySlugIfNeeded} from 'store/ducks/posts'


class PostDetail extends Component {
    static propTypes = {
        post: PropTypes.shape({
            url: PropTypes.string,
            bannerImage: PropTypes.shape({
                url: PropTypes.string,
            }),
            title: PropTypes.string,
            subtitle: PropTypes.string,
            content: PropTypes.string,
            created: PropTypes.shape({
                year: PropTypes.number,
                month: PropTypes.number,
                day: PropTypes.number,
            }),
            tags: PropTypes.arrayOf(PropTypes.shape({
                url: PropTypes.string,
                name: PropTypes.string,
                description: PropTypes.string,
            })),
        }),
    }


    tryFetch = () => {
        const {dispatch, location: {pathname}} = this.props

        dispatch(fetchBySlugIfNeeded(basename(pathname)))
    }


    testItem = (item) => typeof item === 'undefined' || !item.doesNotExist


    Found = ({item = {isLoading: true}}) => (
        <div {...this.props}>
            <Helmet title={item.title ? item.title : 'Loading...'} />
            <Article
                {...item}
                reload={this.tryFetch}
            />
        </div>
    )


    render() {
        const {
            props: {post},
            tryFetch,
            testItem,
            Found,
        } = this

        return (
            <DetailView
                item={post}
                shouldTryFetch={typeof post === 'undefined'}
                tryFetch={tryFetch}
                test={testItem}
                FoundComponent={Found}
                NotFoundComponent={NotFound}
            />
        )
    }
}


// TODO: use reselect
function mapStateToProps(state, props) {
    const {
        posts: {items: posts},
        tags: {items: tags},
    } = state
    const {location: {pathname}} = props

    const desiredPost = posts[basename(pathname)]

    return {
        // will be `undefined` if desired post not found
        post: nestPost(desiredPost, tags),
    }
}


export default connect(mapStateToProps)(PostDetail)
