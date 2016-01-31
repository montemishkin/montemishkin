// third party imports
import React, {Component, PropTypes} from 'react'


class DetailView extends Component {
    static propTypes = {
        item: PropTypes.object,
        // whether or not to try a fetch
        shouldTryFetch: PropTypes.bool,
        // what to do when you should try fetch
        tryFetch: PropTypes.func,
        // item => bool (indicating whether or not item is found)
        test: PropTypes.func,
        // react component
        FoundComponent: PropTypes.func,
        // react component
        NotFoundComponent: PropTypes.func,
    }


    static defaultProps = {
        shouldTryFetch: false,
        tryFetch: () => {},
        test: () => false,
        FoundComponent: () => <p>Found it.</p>,
        NotFoundComponent: () => <p>Not Found!</p>,
    }


    componentWillMount() {
        const {shouldTryFetch, tryFetch} = this.props

        if (shouldTryFetch) {
            tryFetch()
        }
    }


    componentWillReceiveProps(nextProps) {
        const {shouldTryFetch, tryFetch} = nextProps

        if (shouldTryFetch) {
            tryFetch()
        }
    }


    render() {
        const {
            test,
            item,
            FoundComponent,
            NotFoundComponent,
            ...unusedProps,
        } = this.props

        const childProps = {item, ...unusedProps}

        if (test(item)) {
            return <FoundComponent {...childProps} />
        }

        return <NotFoundComponent {...childProps} />
    }
}


export default DetailView
