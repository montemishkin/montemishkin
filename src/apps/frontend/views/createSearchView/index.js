// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
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
 * @arg {string} options.itemsKey - The name of the key to look for the items
 * from the store on.
 * @arg options.store - The store to connect the view to.
 * @arg {function} options.fetch - Function to call when we want to fetch from
 * server.
 * @arg {function} options.getSearchFields - Given an item, return a list of
 * strings that should be searched when searching.
 * @arg {ReactComponent} options.PreviewComponent - React component to use to
 * preview the items in the list.  Will be passed a the single prop `item`.
 */
export default ({name, store, fetch, itemsKey, getSearchFields, PreviewComponent}) => {
    @connect(state => state[store])
    @radium
    class SearchView extends Component {
        static displayName = name


        static propTypes = {
            // error object
            fetchError: PropTypes.any,
            fetching: PropTypes.bool,
            hasLoaded: PropTypes.bool,
            location: PropTypes.shape({
                search: PropTypes.string.isRequired,
            }).isRequired,
            [itemsKey]: PropTypes.arrayOf(PropTypes.shape({
                content: PropTypes.string,
                title: PropTypes.string,
                tags: PropTypes.arrayOf(PropTypes.shape({
                    name: PropTypes.string,
                })),
            })).isRequired,
        }


        // see https://github.com/goatslacker/alt/blob/master/src/utils/connectToStores.js#L74
        static componentDidConnect({hasFetched}) {
            // if not yet loaded this session
            if (!hasFetched) {
                // fetch from server
                fetch()
            }
        }


        constructor(...args) {
            // instantiate `this`
            super(...args)
            // set initial state
            this.state = {
                searchText: this.props.location.search || '',
            }
        }


        componentWillReceiveProps({location}) {
            this.setState({
                searchText: location.search || '',
            })
        }


        getFilteredItems() {
            // strings to search for
            const searchTerms = this.state.searchText
                .toLowerCase()
                .trim()
                .split(' ')
            // return filtered, sorted items
            return this.props[itemsKey].filter((item) => {
                // strings to search through
                const searchFields = getSearchFields(item)

                for (const field of searchFields) {
                    for (const term of searchTerms) {
                        if (field.toLowerCase().search(term) !== -1) {
                            return true
                        }
                    }
                }

                return false
            // sort by creation date, with more recent items first
            }).sort((a, b) => a.creationDate < b.creationDate)
        }


        get fetchingContent() {
            return (
                <img
                    style={styles.image}
                    alt='Loading Indicator'
                    src='/static/images/spinner.gif'
                />
            )
        }


        get successContent() {
            const items = this.props[itemsKey]
            // if there are any items
            if (items.length) {
                // filter out which items to display
                const filteredItems = this.getFilteredItems()

                // if any items survived filter
                if (filteredItems.length) {
                    return (
                        <List
                            style={styles.list}
                            listItemStyle={styles.listItem}
                        >
                            {filteredItems.map((item, key) => (
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
                    <span style={styles.noSearchResultMessage}>
                        No search results!
                    </span>
                )
            }

            return (
                <span style={styles.noItemMessage}>
                    There are no items!
                </span>
            )
        }


        render() {
            const {
                error,
                isFetching,
                hasFetched,
            } = this.props

            return (
                <div style={styles.container}>
                    <SearchBar
                        value={this.state.searchText}
                        onChange={({target}) =>
                            this.setState({searchText: target.value})
                        }
                    />
                    <Loader
                        isFetching={isFetching}
                        hasFetched={hasFetched}
                        error={error}
                        reattemptTimeout={3000}
                        fetch={fetch}
                        fetchingContent={this.fetchingContent}
                        successContent={this.successContent}
                    />
                </div>
            )
        }
    }

    return SearchView
}


// end of file
