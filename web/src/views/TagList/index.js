// third party imports
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import Helmet from 'react-helmet'
// local imports
import TagPreview from './TagPreview'
import ListView from 'components/ListView'
import MainLogo from 'components/Logos/Main'


@connect(({tags}) => ({tags}))
export default class TagList extends Component {
    static propTypes = {
        tags: PropTypes.arrayOf(PropTypes.shape({
            url: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })).isRequired,
    }


    render() {
        const {
            tags,
            ...unusedProps,
        } = this.props

        return (
            <div {...unusedProps}>
                <Helmet title='Tags' />
                <ListView
                    bannerIcon={props => <MainLogo {...props} />}
                    title='Tags'
                    subtitle='gotta love em.'
                    items={tags}
                    PreviewComponent={TagPreview}
                />
            </div>
        )
    }
}
