/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* common alt imports */
import connectToStores from 'alt/utils/connectToStores'
/* local imports */
import styles from './styles'
import TagList from '../TagList'
import TagStore from '../../stores/TagStore'
import TagActions from '../../actions/TagActions'


/**
 * View for page where you can search through tags used on the site.
 * @class
 */
@connectToStores
@radium
class TagSearchView extends React.Component {
    constructor(...args) {
        super(...args)

        this.state = {
            search_text: this.props.query.search || '',
        }
    }


    static getStores() {
        return [TagStore]
    }


    static getPropsFromStores() {
        return TagStore.getState()
    }


    // see https://github.com/goatslacker/alt/blob/master/src/utils/connectToStores.js#L74
    static componentDidConnect(props) {
        // if tags have not yet been loaded this session
        if (!props.has_loaded) {
            // fetch tags from server
            TagActions.fetchTags()
        }
    }


    componentWillReceiveProps(props) {
        this.setState({
            search_text: props.query.search || '',
        })
    }


    getFilteredTags() {
        // strings to search for
        const search_terms = this.state.search_text
            .toLowerCase()
            .trim()
            .split(' ')
        // return filtered tags
        return this.props.tags.filter((tag) => {
            for (const term of search_terms) {
                if (tag.name.toLowerCase().search(term) !== -1) {
                    return true
                }
            }

            return false
        })
    }


    render() {
        // default as if tags have not yet been loaded from server
        let content = (<img
            style={styles.image}
            alt='Loading Indicator'
            src='/static/images/spinner.gif'
        />)

        // if tags have been loaded from server
        if (this.props.has_loaded) {
            // default as if there are no tags
            content = (<span style={styles.no_tag_message}>
                There are no tags!
            </span>)

            // if there are any tags
            if (this.props.tags.length !== 0) {
                // filter out which tags to display
                let filtered_tags = this.getFilteredTags()

                // default as if no tags survived filter
                content = (<span style={styles.no_search_result_message}>
                    No search results!
                </span>)

                // if any ags survived filter
                if (filtered_tags.length !== 0) {
                    content = (<TagList tags={filtered_tags} />)
                }
            }
        }

        return (<div style={styles.container}>
            <input
                type='text'
                placeholder='search'
                style={styles.search_bar}
                value={this.state.search_text}
                onChange={(event) =>
                    this.setState({search_text: event.target.value})
                }
            />
            {content}
        </div>)
    }
}


// export component
export default TagSearchView


// end of file
