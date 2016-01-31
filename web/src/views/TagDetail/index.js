// node imports
import {basename} from 'path'
// third party imports
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
import filter from 'lodash/collection/filter'
// local imports
import Tagle from './Tagle'
import NotFound from 'views/NotFound'
import DetailView from 'components/DetailView'
import nestPost from 'util/nestPost'
import {fetchBySlugIfNeeded as fetchTagsBySlugIfNeeded} from 'store/ducks/tags'
import {fetchAllIfNeeded as fetchAllPostsIfNeeded} from 'store/ducks/posts'


class TagDetail extends Component {
    static propTypes = {
        tag: PropTypes.shape({
            url: PropTypes.string,
            name: PropTypes.string,
            description: PropTypes.string,
            posts: PropTypes.arrayOf(
                PropTypes.shape({
                    url: PropTypes.string,
                    title: PropTypes.string,
                    subtitle: PropTypes.string,
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
                })
            ),
        }),
    }


    tryFetch = () => {
        const {dispatch, location: {pathname}} = this.props

        dispatch(fetchAllPostsIfNeeded())
        dispatch(fetchTagsBySlugIfNeeded(basename(pathname)))
    }


    testItem = (item) => typeof item === 'undefined' || !item.doesNotExist


    Found = ({item = {isLoading: true}}) => (
        <div {...this.props}>
            <Helmet title={item.name ? item.name : 'Loading...'} />
            <Tagle
                {...item}
                reload={this.tryFetch}
            />
        </div>
    )


    render() {
        const {
            props: {tag},
            tryFetch,
            testItem,
            Found,
        } = this


        return (
            <DetailView
                item={tag}
                shouldTryFetch={typeof tag === 'undefined'}
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

    const desiredTagId = basename(pathname)
    const desiredTag = tags[desiredTagId]

    return {
        tag: typeof desiredTag === 'undefined' ? void 0 : {
            ...desiredTag,
            // grab only posts with desired tag
            posts: filter(posts, post => post.tags.indexOf(desiredTagId) !== -1)
                .map(post => nestPost(post, tags)),
        },
    }
}


export default connect(mapStateToProps)(TagDetail)
