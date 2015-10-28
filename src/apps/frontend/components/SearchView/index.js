// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Banner from 'components/Banner'
import List from 'components/List'
import search from 'util/search'


@radium
export default class SearchView extends Component {
    static propTypes = {
        initialSearchText: PropTypes.string,
        mapItemToSearchFields: PropTypes.func,
        // react component
        PreviewComponent: PropTypes.func,
        bannerImageSrc: PropTypes.string,
        bannerColor: PropTypes.string,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        items: PropTypes.array.isRequired,
    }


    constructor(props, args) {
        // instantiate `this`
        super(props, args)
        // set initial state
        this.state = {
            searchText: props.initialSearchText || '',
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


    render() {
        const {
            filteredItems,
            props: {
                bannerImageSrc,
                bannerColor,
                title,
                subtitle,
                PreviewComponent,
                ...unusedProps,
            },
            state: {searchText},
        } = this

        // the page content (after the banner)
        let content
        // if any items survived the filter
        if (filteredItems.length > 0) {
            // render a list of them as content
            content = (
                <List style={styles.list} listItemStyle={styles.listItem}>
                    {filteredItems.map((item, key) => (
                        <PreviewComponent {...item} key={key} />
                    ))}
                </List>
            )
        // otherwise no items survived the filter
        } else {
            // so render a message indicating no search results
            content = (
                <section style={styles.messageContainer}>
                    <div style={styles.message}>
                        ayyyyy.... nothin here alright??
                    </div>
                </section>
            )
        }

        return (
            <article {...unusedProps}>
                <Banner
                    style={{backgroundColor: bannerColor}}
                    imageSrc={bannerImageSrc}
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
