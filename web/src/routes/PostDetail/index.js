// node imports
import {basename} from 'path'
// third party imports
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
import {createSelector} from 'reselect'
// local imports
import Article from './Article'
import NotFound from 'routes/NotFound'
import DetailView from 'components/DetailView'
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


const mapStateToProps = createSelector(
    state => state.posts.items,
    state => state.tags.items,
    (_, props) => basename(props.location.pathname),
    (posts, tags, slug) => ({
        // will be `undefined` if desired post not found
        post: nestPost(posts[slug], tags),
    })
)


export default connect(mapStateToProps)(PostDetail)
