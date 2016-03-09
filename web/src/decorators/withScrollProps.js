// third party imports
import React, {Component} from 'react'
import throttle from 'lodash/function/throttle'


function withScrollProps(Element, throttleTime = 100) {
    return class ScrollListener extends Component {
        constructor(...args) {
            super(...args)
            this.state = {
                scrollX: typeof window === 'undefined' ? 0 : window.scrollX,
                scrollY: typeof window === 'undefined' ? 0 : window.scrollY,
            }
        }


        handleScroll = throttle(
            () => this.setState({
                scrollX: window.scrollX,
                scrollY: window.scrollY,
            }),
            throttleTime
        )


        componentDidMount() {
            window.addEventListener('scroll', this.handleScroll)
        }


        componentWillUnmount() {
            window.removeEventListener('scroll', this.handleScroll)
        }


        render() {
            const {
                props,
                state: {
                    scrollX,
                    scrollY,
                },
            } = this

            return <Element {...props} scrollX={scrollX} scrollY={scrollY} />
        }
    }
}


export default withScrollProps
