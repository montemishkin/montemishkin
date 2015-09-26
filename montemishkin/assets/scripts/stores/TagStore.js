/* common alt imports */
import alt from '../alt-instance'
/* local imports */
import TagActions from '../actions/TagActions'


/**
 * Store for tags.
 * @class
 */
@alt.createStore
class TagStore {
    constructor() {
        this.state = {
            // list of tags
            tags: [],
            // true if there has ever been a successful fetch
            has_loaded: false,
            // true if mid fetch of data
            fetching: false,
            // error message (if any) from fetching data
            fetch_error: null,
        }

        this.bindActions(TagActions)
    }


    /**
     * Indicate that we are in the fetching state.
     */
    onFetchTags() {
        this.setState({
            fetching: true,
            fetch_error: null,
        })
    }


    /**
     * Indicate failure to fetch tag from server.
     * @param {string} err - Error message to display.
     */
    onFailFetchTags(err) {
        this.setState({
            fetching: false,
            fetch_error: err,
        })
    }


    /**
     * Completely overwrite store's list of tags.
     * @arg {array} tags - List of tags.
     */
    onSetTags(tags) {
        this.setState({
            tags: tags,
            has_loaded: true,
            fetching: false,
            fetch_error: null,
        })
    }
}


// export store
export default TagStore


// end of file
