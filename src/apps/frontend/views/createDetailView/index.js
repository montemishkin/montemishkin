// third party imports
import React, {Component} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'
// import DisqusThread from 'react-disqus-thread'
// local imports
import styles from './styles'
import Loader from 'components/Loader'


/**
 * Factory for searchable item detail view.
 * @arg {object} options - Allows for named arguments.
 * @arg {string} options.name - The display name for the returned react
 * component.
 * @arg {string} options.itemsKey - The name of the key to look for the items
 * from the store on.
 * @arg options.store - The store to connect the view to.
 * @arg {function} options.fetch - Function to call when we want to fetch from
 * server.
 * @arg {function} options.getItemContent - Given an item, return the rendered
 * content to display.
 */
export default ({name, storeKey, fetch, itemsKey, getItemContent}) => {
    const selector = createSelector(
        // grab desired store off the state tree
        state => state[storeKey],
        // grab item's slug off the component's props
        (state, props) => props.params.slug,
        createSelector(
            // grab the items list off the store
            store => store[itemsKey],
            // grab the other bits of the store
            store => store.isFetching,
            store => store.hasFetched,
            store => store.error,
            // grab the slug
            (store, slug) => slug,
            (items, isFetching, hasFetched, error, slug) => ({
                isFetching,
                hasFetched,
                error,
                item: items.filter(item => item.slug === slug)[0],
            })
        )
    )

    @connect(selector)
    @radium
    class DetailView extends Component {
        static displayName = name


        // see https://github.com/goatslacker/alt/blob/master/src/utils/connectToStores.js#L74
        static componentDidConnect({hasFetched}) {
            // if items have not yet been loaded this session
            if (!hasFetched) {
                // fetch items from server
                fetch()
            }
        }


        /**
         * Returns what `render` should return if we are still mid ajax load.
         */
        get loadingContent() {
            return (
                <div style={styles.container}>
                    <div style={styles.loadingImageWrapper}>
                        <img
                            style={styles.loadingImage}
                            alt='Loading Indicator'
                            src='/static/images/spinner.gif'
                        />
                    </div>
                </div>
            )
        }


        /**
         * Returns what `render` should return if there was a failure in ajax fetch.
         */
        get failureContent() {
            return ({error}) => (
                <div style={styles.container}>
                    <h3 style={styles.title}>
                        Woops!
                    </h3>
                    <p style={styles.errorMessage}>
                        We had trouble reaching the server.
                        Feel free to refresh the page, or wait for me to retry.
                        Here is the error object: {error}
                    </p>
                </div>
            )
        }


        /**
         * Returns what `render` should return if we have loaded and the desired
         * post was NOT found.
         */
        get postNotFoundContent() {
            return (
                <div style={styles.container}>
                    <h3 style={styles.title}>
                        Hmm...
                    </h3>
                    <p style={styles.errorMessage}>
                        There is nothing here!
                    </p>
                </div>
            )
        }


        render() {
            const {isFetching, hasFetched, error, item} = this.props

            // content to display on successful load
            let successContent
            // if we have loaded and found the desired item
            if (hasFetched && item) {
                successContent = getItemContent(item)
            } else {
                successContent = this.itemNotFoundContent
            }

            return (
                <Loader
                    isFetching={isFetching}
                    hasFetched={hasFetched}
                    error={error}
                    reattemptTimeout={3000}
                    fetch={fetch}
                    errorContent={this.failureContent}
                    fetchingContent={this.loadingContent}
                    successContent={successContent}
                />
            )
        }
    }

    return DetailView
}


// <DisqusThread
//     shortname='montemishkin'
//     identifier={this.props.post.slug}
//     title={this.props.post.title}
//     url='http://www.example.com/example-thread'
//     categoryId='123456'
// />


// end of file
