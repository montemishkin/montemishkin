/* common alt imports */
import alt from '../alt-instance'
/* misc third party imports */
import {ajax} from 'jquery'


/**
 * Actions for tags.
 * @class
 */
@alt.createActions
class TagActions {
    fetchTags() {
        // dispatch before async to allow for loading state
        this.dispatch()
        setTimeout(() =>
        ajax({
            url: '/api/tags/',
            success: (tags) => this.actions.setTags(tags),
            error: (...args) => this.actions.failFetchTags(...args),
        })
        , 500)
    }


    setTags(tags) {
        this.dispatch(tags)
    }


    failFetchTags(...args) {
        this.dispatch(args)
    }
}


// export actions
export default TagActions


// end of file
