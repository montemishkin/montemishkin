// third party imports
import React, {Component, PropTypes} from 'react'
import isFunction from 'lodash/lang/isFunction'


/**
 *
 */
export default class Loader extends Component {
    static propTypes = {
        is_fetching: PropTypes.bool,
        has_fetched: PropTypes.bool,
        // error object
        error: PropTypes.any,
        reattempt_timeout: PropTypes.number,
        fetch: PropTypes.func,
        error_content: PropTypes.oneOfType([
            // react component (not react element)
            PropTypes.func,
            // react element (not react component)
            PropTypes.node,
        ]),
        fetching_content: PropTypes.oneOfType([
            // react component (not react element)
            PropTypes.func,
            // react element (not react component)
            PropTypes.node,
        ]),
        success_content: PropTypes.oneOfType([
            // react component (not react element)
            PropTypes.func,
            // react element (not react component)
            PropTypes.node,
        ]),
    }


    static defaultProps = {
        reattempt_timeout: -1,
        error_content: (<span>error :(</span>),
        fetching_content: (<span>fetching...</span>),
        success_content: (<span>success!</span>),
    }


    render() {
        const {error} = this.props

        if (typeof error !== 'undefined' && error !== null) {
            const {fetch, reattempt_timeout, error_content} = this.props

            // if the reattempt_timeout is set, and a fetch routine was provided
            if (reattempt_timeout >= 0 && fetch) {
                // set a timer to fetch in a little bit
                setTimeout(fetch, reattempt_timeout)
            }

            // if a react component was provided
            if (isFunction(error_content)) {
                // must be capital to enter React.createElement properly
                const ErrorComponent = error_content
                // render it passing along our props
                return (<ErrorComponent {...this.props} />)
            }

            // a react element was provided so just return that
            return error_content
        }

        const {is_fetching} = this.props

        if (is_fetching) {
            const {fetching_content} = this.props

            // if a react component was provided
            if (isFunction(fetching_content)) {
                // must be capital to enter React.createElement properly
                const FetchingComponent = fetching_content
                // render it passing along our props
                return (<FetchingComponent {...this.props} />)
            }

            // a react element was provided so just return that
            return fetching_content
        }

        const {success_content} = this.props

        // if a react component was provided
        if (isFunction(success_content)) {
            // must be capital to enter React.createElement properly
            const SuccessComponent = success_content
            // render it passing along our props
            return <SuccessComponent {...this.props} />
        }

        // a react element was provided so just return that
        return success_content
    }
}


// end of file
