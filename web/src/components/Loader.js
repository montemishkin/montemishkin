// third party imports
import React, {Component, PropTypes} from 'react'


class Loader extends Component {
    static propTypes = {
        isInvalid: PropTypes.bool,
        isLoading: PropTypes.bool,
        error: PropTypes.object,
        // function to call when should reload
        reload: PropTypes.func,
        // in milliseconds
        reloadTimeout: PropTypes.number,
        // react component
        LoadingContent: PropTypes.func,
        // react component
        ErrorContent: PropTypes.func,
        // react component
        LoadedContent: PropTypes.func,
    }


    static defaultProps = {
        isInvalid: false,
        isLoading: false,
        reload: () => {},
        // two seconds, in milliseconds
        reloadTimeout: 2000,
        LoadingContent: () => <span>Loading...</span>,
        ErrorContent: ({error}) => <span>Error: {error.message}</span>,
        LoadedContent: () => <span>Loaded!</span>,
    }


    componentWillMount() {
        const {isInvalid, error, reload, reloadTimeout} = this.props

        if (isInvalid) {
            reload()
            return
        }

        if (error && typeof window !== 'undefined') {
            // after a timeout, triger another fetch
            window.setTimeout(reload, reloadTimeout)
        }
    }


    componentWillReceiveProps(nextProps) {
        const {isInvalid, error, reload, reloadTimeout} = nextProps

        if (isInvalid) {
            reload()
            return
        }

        if (error && typeof window !== 'undefined') {
            // after a timeout, triger another fetch
            window.setTimeout(reload, reloadTimeout)
        }
    }


    render() {
        const {
            isLoading,
            error,
            LoadingContent,
            ErrorContent,
            LoadedContent,
        } = this.props

        if (isLoading) {
            return <LoadingContent {...this.props} />
        }
        if (error) {
            return <ErrorContent {...this.props} />
        }
        return <LoadedContent {...this.props} />
    }
}


export default Loader
