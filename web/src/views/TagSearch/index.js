// third party imports
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
// local imports
import TagPreview from './TagPreview'
import SearchView from 'components/SearchView'
import MainLogo from 'components/Logos/Main'


@connect(({tags}) => ({tags}))
export default class TagSearch extends Component {
    static propTypes = {
        location: PropTypes.shape({
            query: PropTypes.shape({
                search: PropTypes.string,
            }).isRequired,
        }).isRequired,
        tags: PropTypes.arrayOf(PropTypes.shape({
            url: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })).isRequired,
    }


    render() {
        const {
            location: {query: {search: initialSearchText}},
            tags,
            ...unusedProps,
        } = this.props

        return (
            <div {...unusedProps}>
                <Helmet title='Tags' />
                <SearchView
                    bannerIcon={props => <MainLogo {...props} />}
                    title='Tags'
                    subtitle='gotta love em.'
                    items={tags}
                    mapItemToSearchFields={tag => [tag.name, tag.description]}
                    PreviewComponent={TagPreview}
                    initialSearchText={initialSearchText}
                />
            </div>
        )
    }
}
