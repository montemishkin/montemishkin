// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Banner from 'components/Banner'
import WideList from 'components/WideList'
import search from 'util/search'


@radium
export default class SearchView extends Component {
    static propTypes = {
        initialSearchText: PropTypes.string,
        mapItemToSearchFields: PropTypes.func,
        // react component
        PreviewComponent: PropTypes.func.isRequired,
        // react component
        bannerIcon: PropTypes.func,
        bannerColor: PropTypes.string,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        items: PropTypes.array.isRequired,
    }


    static defaultProps = {
        initialSearchText: '',
        // TODO: get a default image for search views
        bannerIcon: props => <img {...props} src='' />,
        // TODO: get a default color for search views
        bannerColor: '',
    }


    constructor(props, args) {
        // instantiate `this`
        super(props, args)
        // set initial state
        this.state = {
            searchText: props.initialSearchText,
        }
    }


    get filteredItems() {
        const {
            props: {
                items,
                mapItemToSearchFields,
            },
            state: {searchText},
        } = this

        return search(searchText, items, mapItemToSearchFields)
    }


    get content() {
        const {filteredItems, props: {PreviewComponent}} = this

        // if any items survived the filter
        if (filteredItems.length > 0) {
            // render a list of them as content
            return (
                <WideList>
                    {filteredItems.map((item, key) => (
                        <PreviewComponent {...item} key={key} />
                    ))}
                </WideList>
            )
        }
        // otherwise no items survived the filter
        // so render a message indicating no search results
        return (
            <section style={styles.messageContainer}>
                <span style={styles.message}>
                    No search results.
                </span>
            </section>
        )
    }


    render() {
        const {
            content,
            props: {
                bannerIcon,
                bannerColor,
                title,
                subtitle,
                ...unusedProps,
            },
            state: {searchText},
        } = this

        return (
            <article {...unusedProps}>
                <Banner
                    style={{backgroundColor: bannerColor}}
                    Icon={bannerIcon}
                    title={title}
                    subtitle={subtitle}
                >
                    <input
                        type='text'
                        placeholder='Search'
                        style={styles.searchBar}
                        value={searchText}
                        onChange={({target: {value}}) =>
                            this.setState({searchText: value})
                        }
                    />
                </Banner>
                {content}
            </article>
        )
    }
}
