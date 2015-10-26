// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles from './styles'
import TagPreview from './TagPreview'
import Banner from 'components/Banner'
import List from 'components/List'
import search from 'util/search'


function mapStateToProps({tags}) {
    return {
        tags: tags.map(tag => ({
            ...tag,
            link: `/tags/${tag.slug}`,
        })),
    }
}


@connect(mapStateToProps)
@radium
export default class TagSearch extends Component {
    static propTypes = {
        tags: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        })).isRequired,
        location: PropTypes.shape({
            query: PropTypes.shape({
                search: PropTypes.string,
            }).isRequired,
        }).isRequired,
    }


    constructor(props, ...args) {
        // instantiate `this`
        super(props, ...args)
        // set initial state
        this.state = {
            // grab search text from url query, default to empty string
            searchText: props.location.query.search || '',
        }
    }


    get filteredTags() {
        const {props: {tags}, state: {searchText}} = this

        return search(searchText, tags, tag => [tag.title])
    }


    render() {
        const {filteredTags} = this

        // the page content (after the banner)
        let content
        // if any tags survived the filter
        if (filteredTags.length > 0) {
            // render a list of them as content
            content = (
                <List style={styles.content}>
                    {filteredTags.map((tag, key) => (
                        <TagPreview {...tag} key={key} />
                    ))}
                </List>
            )
        // otherwise no tags survived the filter
        } else {
            // so render a message indicating no search results
            content = (
                <div style={styles.content}>
                    ayyyyy.... nothin here alright??
                </div>
            )
        }

        return (
            <article style={styles.container}>
                <Banner
                    style={styles.banner}
                    imageSrc='/static/images/bird-logo.png'
                    title='Tags'
                    subtitle='gotta love em.'
                >
                    <input
                        type='text'
                        placeholder='Search'
                        style={styles.searchBar}
                        value={this.state.searchText}
                        onChange={({target: {value}}) =>
                            this.setState({searchText: value})
                        }
                    />
                </Banner>
                <section style={styles.contentContainer}>
                    {content}
                </section>
            </article>
        )
    }
}
