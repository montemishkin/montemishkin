// third party imports
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
// local imports
import TagPreview from './TagPreview'
import SearchView from 'components/SearchView'
import MainLogo from 'components/Logos/Main'


function mapStateToProps({tags}) {
    return {
        tags: tags.map(tag => ({
            ...tag,
            link: `/tags/${tag.slug}`,
        })),
    }
}


@connect(mapStateToProps)
export default class TagSearch extends Component {
    static propTypes = {
        location: PropTypes.shape({
            query: PropTypes.shape({
                search: PropTypes.string,
            }).isRequired,
        }).isRequired,
        tags: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            description: PropTypes.string,
        })).isRequired,
    }


    render() {
        const {
            location: {query: {search: initialSearchText}},
            tags,
            ...unusedProps,
        } = this.props

        return (
            <SearchView
                {...unusedProps}
                bannerIcon={props => <MainLogo {...props} />}
                title='Tags'
                subtitle='gotta love em.'
                items={tags}
                mapItemToSearchFields={tag => [tag.title, tag.description]}
                PreviewComponent={TagPreview}
                initialSearchText={initialSearchText}
            />
        )
    }
}
