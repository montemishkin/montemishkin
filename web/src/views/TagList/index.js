// third party imports
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
import reduce from 'lodash/collection/reduce'
// local imports
import TagPreview from './TagPreview'
import ListView from 'components/ListView'
import MainLogo from 'components/Logos/Main'
import {fetchAllIfNeeded} from 'store/ducks/tags'


class TagList extends Component {
    static propTypes = {
        tags: PropTypes.arrayOf(PropTypes.shape({
            url: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })).isRequired,
        loadDateTime: PropTypes.number,
        isLoading: PropTypes.bool.isRequired,
        loadError: PropTypes.object,
    }


    BannerIcon = (props) => <MainLogo {...props} />


    reload = () => this.props.dispatch(fetchAllIfNeeded())


    render() {
        const {
            props: {
                tags,
                loadDateTime,
                isLoading,
                loadError,
                ...unusedProps,
            },
            BannerIcon,
            reload,
        } = this

        return (
            <div {...unusedProps}>
                <Helmet title='Tags' />
                <ListView
                    BannerIcon={BannerIcon}
                    title='Tags'
                    subtitle='gotta love em.'
                    items={tags}
                    PreviewComponent={TagPreview}
                    isLoading={isLoading}
                    loadDateTime={loadDateTime}
                    loadError={loadError}
                    reload={reload}
                />
            </div>
        )
    }
}


// TODO: use reselect
function mapStateToProps(state) {
    const {
        items: tags,
        loadDateTime,
        isLoading,
        loadError,
    } = state.tags

    return {
        // map object of tag items to array of tags
        tags: reduce(tags, (result, tag) => [...result, tag], [])
            // sort alphabetically
            .sort(({name: a}, {name: b}) => a < b ? -1 : (a > b ? 1 : 0)),
        loadDateTime,
        isLoading,
        loadError,
    }
}


export default connect(mapStateToProps)(TagList)
