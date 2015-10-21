// third party imports
import React, {Component, PropTypes} from 'react'
import isFunction from 'lodash/lang/isFunction'


/**
 *
 */
export default class Loader extends Component {
    static propTypes = {
        isFetching: PropTypes.bool,
        hasFetched: PropTypes.bool,
        // error object
        error: PropTypes.any,
        reattemptTimeout: PropTypes.number,
        fetch: PropTypes.func,
        errorContent: PropTypes.oneOfType([
            // react component (not react element)
            PropTypes.func,
            // react element (not react component)
            PropTypes.node,
        ]),
        fetchingContent: PropTypes.oneOfType([
            // react component (not react element)
            PropTypes.func,
            // react element (not react component)
            PropTypes.node,
        ]),
        successContent: PropTypes.oneOfType([
            // react component (not react element)
            PropTypes.func,
            // react element (not react component)
            PropTypes.node,
        ]),
    }


    static defaultProps = {
        reattemptTimeout: -1,
        errorContent: (<span>error :(</span>),
        fetchingContent: (<span>fetching...</span>),
        successContent: (<span>success!</span>),
    }


    render() {
        const {error} = this.props

        if (typeof error !== 'undefined' && error !== null) {
            const {fetch, reattemptTimeout, errorContent} = this.props

            // if the reattemptTimeout is set, and a fetch routine was provided
            if (reattemptTimeout >= 0 && fetch) {
                // set a timer to fetch in a little bit
                setTimeout(fetch, reattemptTimeout)
            }

            // if a react component was provided
            if (isFunction(errorContent)) {
                // must be capital to enter React.createElement properly
                const ErrorComponent = errorContent
                // render it passing along our props
                return (<ErrorComponent {...this.props} />)
            }

            // a react element was provided so just return that
            return errorContent
        }

        const {isFetching} = this.props

        if (isFetching) {
            const {fetchingContent} = this.props

            // if a react component was provided
            if (isFunction(fetchingContent)) {
                // must be capital to enter React.createElement properly
                const FetchingComponent = fetchingContent
                // render it passing along our props
                return (<FetchingComponent {...this.props} />)
            }

            // a react element was provided so just return that
            return fetchingContent
        }

        const {successContent} = this.props

        // if a react component was provided
        if (isFunction(successContent)) {
            // must be capital to enter React.createElement properly
            const SuccessComponent = successContent
            // render it passing along our props
            return <SuccessComponent {...this.props} />
        }

        // a react element was provided so just return that
        return successContent
    }
}


// end of file
