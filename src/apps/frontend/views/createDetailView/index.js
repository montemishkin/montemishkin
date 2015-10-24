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
 * @arg {string} options.name - The display name for the returned react
 * component.
 * @arg {string} options.storeKey - The key to grab off the store state.
 * @arg {function} options.ItemContent - Component to render the item with.
 */
export default ({name, storeKey, ItemContent}) => {
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
                ),
            },
        }
    }


    @connect(mapStateToProps)
    @radium
    class DetailView extends Component {
        static displayName = name


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
            let successContent
            // if we have found the desired item
            if (item) {
                successContent = <ItemContent {...item} />
            } else {
                successContent = this.itemNotFoundContent
            }

            return (
                <div style={styles.container}>
                    {successContent}
                </div>
            )
        }
    }

    return DetailView
}
