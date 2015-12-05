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
        sortEqualScores: PropTypes.func,
        // react component
        PreviewComponent: PropTypes.func.isRequired,
        // react component
        bannerIcon: PropTypes.func,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        items: PropTypes.array.isRequired,
    }


    static defaultProps = {
        initialSearchText: '',
        bannerIcon: radium(props => <i {...props} className='fa fa-search' />),
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
                sortEqualScores,
            },
            state: {searchText},
        } = this

        return search(searchText, items, mapItemToSearchFields, sortEqualScores)
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
                title,
                subtitle,
                ...unusedProps,
            },
            state: {searchText},
        } = this

        return (
            <article {...unusedProps}>
                <Banner
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
