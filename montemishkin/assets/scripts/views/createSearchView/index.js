// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import connectToStores from 'alt/utils/connectToStores'
// local imports
import styles from './styles'
import List from 'components/List'
import Loader from 'components/Loader'
import SearchBar from 'components/SearchBar'


/**
 * Factory for searchable list of item previews.
 * @arg {object} options - Allows for named arguments.
 * @arg {string} options.name - The display name for the returned react
 * component.
 * @arg {string} options.items_key - The name of the key to look for the items
 * from the store on.
 * @arg options.store - The store to connect the view to.
 * @arg {function} options.fetch - Function to call when we want to fetch from
 * server.
 * @arg {function} options.getSearchFields - Given an item, return a list of
 * strings that should be searched when searching.
 * @arg {ReactComponent} options.PreviewComponent - React component to use to
 * preview the items in the list.  Will be passed a the single prop `item`.
 */
export default ({name, store, fetch, items_key, getSearchFields, PreviewComponent}) => {
    @connectToStores
    @radium
    class SearchView extends Component {
        static displayName = name


        static propTypes = {
            // error object
            fetch_error: PropTypes.any,
            fetching: PropTypes.bool,
            has_loaded: PropTypes.bool,
            location: PropTypes.shape({
                search: PropTypes.string.isRequired,
            }).isRequired,
            [items_key]: PropTypes.arrayOf(PropTypes.shape({
                content: PropTypes.string,
                title: PropTypes.string,
                tags: PropTypes.arrayOf(PropTypes.shape({
                    name: PropTypes.string,
                })),
            })).isRequired,
        }


        static getStores() {
            return [store]
        }


        static getPropsFromStores() {
            // grab entire state from store
            return store.getState()
        }


        // see https://github.com/goatslacker/alt/blob/master/src/utils/connectToStores.js#L74
        static componentDidConnect({has_loaded}) {
            // if not yet loaded this session
            if (!has_loaded) {
                // fetch from server
                fetch()
            }
        }


        constructor(...args) {
            // instantiate `this`
            super(...args)
            // set initial state
            this.state = {
                search_text: this.props.location.search || '',
            }
        }


        componentWillReceiveProps({location}) {
            this.setState({
                search_text: location.search || '',
            })
        }


        getFilteredItems() {
            // strings to search for
            const search_terms = this.state.search_text
                .toLowerCase()
                .trim()
                .split(' ')
            // return filtered, sorted items
            return this.props[items_key].filter((item) => {
                // strings to search through
                const search_fields = getSearchFields(item)

                for (const field of search_fields) {
                    for (const term of search_terms) {
                        if (field.toLowerCase().search(term) !== -1) {
                            return true
                        }
                    }
                }

                return false
            // sort by creation date, with more recent items first
            }).sort((a, b) => a.creation_date < b.creation_date)
        }


        get fetching_content() {
            return (
                <img
                    style={styles.image}
                    alt='Loading Indicator'
                    src='/static/images/spinner.gif'
                />
            )
        }


        get success_content() {
            const items = this.props[items_key]
            // if there are any items
            if (items.length) {
                // filter out which items to display
                const filtered_items = this.getFilteredItems()

                // if any items survived filter
                if (filtered_items.length) {
                    return (
                        <List
                            style={styles.list}
                            list_item_style={styles.list_item}
                        >
                            {filtered_items.map((item, key) => (
                                <PreviewComponent
                                    key={key}
                                    item={item}
                                />
                            ))}
                        </List>
                    )
                }

                // no items survived the filter
                return (
                    <span style={styles.no_search_result_message}>
                        No search results!
                    </span>
                )
            }

            return (
                <span style={styles.no_item_message}>
                    There are no items!
                </span>
            )
        }


        render() {
            const {
                fetch_error,
                fetching,
                has_loaded,
            } = this.props

            return (
                <div style={styles.container}>
                    <SearchBar
                        value={this.state.search_text}
                        onChange={({target}) =>
                            this.setState({search_text: target.value})
                        }
                    />
                    <Loader
                        is_fetching={fetching}
                        has_fetched={has_loaded}
                        error={fetch_error}
                        reattempt_timeout={3000}
                        fetch={fetch}
                        fetching_content={this.fetching_content}
                        success_content={this.success_content}
                    />
                </div>
            )
        }
    }

    return SearchView
}


// end of file
