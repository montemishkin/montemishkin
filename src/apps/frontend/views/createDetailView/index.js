// third party imports
import React, {Component} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// import {createSelector} from 'reselect'
// local imports
import styles from './styles'


/**
 * Factory for searchable item detail view.
 * @arg {object} options - Allows for named arguments.
 * @arg {string} options.displayName - The display name for the returned react
 * component.
 * @arg {string} options.storeKey - The key to grab off the store state.
 * @arg {function} options.ItemComponent - Component to render the item with.
 */
export default ({displayName, storeKey, ItemComponent}) => {
    // TODO: this should be a reselect selector
    function mapStateToProps(state, props) {
        const desiredItem = state[storeKey].filter(
            item => item.slug === props.params.slug
        )[0]

        return {
            item: {
                ...desiredItem,
                tags: desiredItem.tags.map(
                    id => state.tags.filter(tag => tag.id === id)[0]
                ).map(tag => ({
                    link: `/tags/${tag.slug}`,
                    title: tag.title,
                })),
            },
        }
    }


    @connect(mapStateToProps)
    @radium
    class DetailView extends Component {
        static displayName = displayName


        /**
         * Returns what `render` should return if we have loaded and the desired
         * post was NOT found.
         */
        get itemNotFoundContent() {
            return (
                <div>
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
            const {item} = this.props

            // content to display on successful load
            let content
            // if we have found the desired item
            if (item) {
                content = <ItemComponent {...item} />
            } else {
                content = this.itemNotFoundContent
            }

            return (
                <div style={styles.container}>
                    {content}
                </div>
            )
        }
    }

    return DetailView
}
