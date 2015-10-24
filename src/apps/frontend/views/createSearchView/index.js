// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles from './styles'
import List from 'components/List'
import Loader from 'components/Loader'
import Banner from 'components/Banner'
import SearchBar from 'components/SearchBar'


/**
 * Factory for searchable list of item previews.
 * @arg {object} options - Allows for named arguments.
 * @arg {string} options.name - The display name for the returned react
 * component.
 * @arg {function} options.fetch - Given the dispatch method, do yo fetch thang.
 * @arg {string} options.storeKey - The key to grab off the store state.
 * @arg {function} options.getSearchFields - Given an item, return a list of
 * strings that should be searched when searching.
 * @arg {ReactComponent} options.PreviewComponent - React component to use to
 * preview the items in the list.  Will be passed a the single prop `item`.
 */
export default ({name, fetch, storeKey, getSearchFields, PreviewComponent}) => {
    @connect(state => state[storeKey])
    @radium
    class SearchView extends Component {
        static displayName = name


        static propTypes = {
            // error object
            fetchError: PropTypes.any,
            isFetching: PropTypes.bool,
            hasFetched: PropTypes.bool,
            location: PropTypes.shape({
                search: PropTypes.string.isRequired,
            }).isRequired,
            items: PropTypes.arrayOf(PropTypes.shape({
                content: PropTypes.string,
                title: PropTypes.string,
                tags: PropTypes.arrayOf(PropTypes.shape({
                    name: PropTypes.string,
                })),
            })).isRequired,
        }


        constructor(props, ...args) {
            // instantiate `this`
            super(props, ...args)
            // set initial state
            this.state = {
                searchText: props.location.search || '',
            }
        }


        componentDidMount() {
            const {hasFetched} = this.props

            // if not yet loaded this session
            if (!hasFetched) {
                const {dispatch} = this.props
                // fetch items from server
                fetch(dispatch)
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
            return this.props.items.filter((item) => {
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
            // extra wrapping div is so that <i> is not immediate child
            // of display flex container
            return (
                <div>
                    <i className='fa fa-refresh fa-spin' />
                </div>
            )
        }


        get successContent() {
            const items = this.props.items
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
                dispatch,
            } = this.props

            return (
                <div style={styles.container}>
                    <Banner
                        style={styles.banner}
                        title='Blog'
                        subtitle='oh yeah.'
                        imageSrc='/static/images/bird-logo.png'
                    >
                        <SearchBar
                            style={styles.searchBar}
                            value={this.state.searchText}
                            onChange={({target}) =>
                                this.setState({searchText: target.value})
                            }
                        />
                    </Banner>
                    <Loader
                        isFetching={isFetching}
                        hasFetched={hasFetched}
                        error={error}
                        reattemptTimeout={3000}
                        fetch={() => fetch(dispatch)}
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
