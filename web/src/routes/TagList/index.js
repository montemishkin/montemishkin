// third party imports
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'
import Helmet from 'react-helmet'
import filter from 'lodash/collection/filter'
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


const mapStateToProps = createSelector(
    state => state.tags.items,
    state => state.tags.loadDateTime,
    state => state.tags.isLoading,
    state => state.tags.loadError,
    (tags, loadDateTime, isLoading, loadError) => ({
        // filter out tags known to not exist (returns an array)
        tags: filter(tags, tag => !tag.doesNotExist && tag.loadDateTime)
            // sort alphabetically
            .sort(({name: a}, {name: b}) => a < b ? -1 : (a > b ? 1 : 0)),
        loadDateTime,
        isLoading,
        loadError,
    })
)


export default connect(mapStateToProps)(TagList)
