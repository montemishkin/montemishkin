// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles from './styles'
import List from 'components/List'
import Banner from 'components/Banner'
import SearchBar from 'components/SearchBar'


/**
 * Factory for searchable list of item previews.
 * @arg {object} options - Allows for named arguments.
 * @arg {string} options.displayName - The display name for the returned react
 * component.
 * @arg {string} options.storeKey - The key to grab off the store state.
 * @arg {function} options.getSearchFields - Given an item, return a list of
 * strings that should be searched when searching.
 * @arg {ReactComponent} options.PreviewComponent - React component to use to
 * preview the items in the list.
 */
export default ({displayName, storeKey, getSearchFields, PreviewComponent}) => {
    // TODO: this should be a reselect selector
    function mapStateToProps(state) {
        return {
            items: state[storeKey].map(item => ({
                ...item,
                tags: item.tags.map(
                    id => state.tags.filter(tag => tag.id === id)[0]
                ),
            })),
        }
    }

    @connect(mapStateToProps)
    @radium
    class SearchView extends Component {
        static displayName = displayName


        static propTypes = {
            location: PropTypes.shape({
                search: PropTypes.string.isRequired,
            }).isRequired,
            items: PropTypes.arrayOf(PropTypes.shape({
                content: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired,
                tags: PropTypes.arrayOf(PropTypes.shape({
                    title: PropTypes.string.isRequired,
                    slug: PropTypes.string.isRequired,
                    id: PropTypes.number.isRequired,
                })).isRequired,
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


        componentWillReceiveProps({location}) {
            this.setState({
                searchText: location.search || '',
            })
        }


        get filteredItems() {
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


        get content() {
            // if there are any items
            if (this.props.items.length) {
                // filter out which items to display
                const filteredItems = this.filteredItems

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
                                    {...item}
                                    link={`/${storeKey}/${item.slug}`}
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
            // TODO: this is a silly solution. if anything these should be
            // passed to factory as arguments. but even that is a silly solution
            let bannerTitle = 'Uhhhh'
            let bannerSubtitle = 'ohh.'
            let bannerColor = '#EEBBAF'
            if (storeKey === 'posts') {
                bannerTitle = 'Blog'
                bannerSubtitle = 'oh yeah.'
                bannerColor = '#8CB2FF'
            } else if (storeKey === 'projects') {
                bannerTitle = 'Projects'
                bannerSubtitle = 'check em out.'
                bannerColor = '#F5FFC1'
            }

            return (
                <div style={styles.container}>
                    <Banner
                        style={{
                            ...styles.banner,
                            backgroundColor: bannerColor,
                        }}
                        title={bannerTitle}
                        subtitle={bannerSubtitle}
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
                    {this.content}
                </div>
            )
        }
    }

    return SearchView
}
