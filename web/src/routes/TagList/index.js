// third party imports
import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'
import radium from 'radium'
import Helmet from 'react-helmet'
import filter from 'lodash/collection/filter'
// local imports
import TagPreview from './TagPreview'
import ListView from 'components/ListView'
import {fetchAllIfNeeded} from 'store/ducks/tags'


function reload(dispatch) {
    dispatch(fetchAllIfNeeded())
}


function TagList({
    tags,
    loadDateTime,
    isLoading,
    loadError,
    dispatch,
}) {
    return (
        <div>
            <Helmet title='Tags' />
            <ListView
                BannerIcon={radium(props =>
                    <img {...props} src='/static/images/logo-main.svg' />
                )}
                title='Tags'
                subtitle='gotta love em.'
                items={tags}
                PreviewComponent={TagPreview}
                isLoading={isLoading}
                loadDateTime={loadDateTime}
                loadError={loadError}
                reload={reload.bind(null, dispatch)}
            />
        </div>
    )
}


TagList.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    })).isRequired,
    loadDateTime: PropTypes.number,
    isLoading: PropTypes.bool.isRequired,
    loadError: PropTypes.object,
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
