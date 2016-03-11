// third party imports
import React, {Component} from 'react'
import throttle from 'lodash/function/throttle'


function withScrollProps(Element, throttleTime = 0) {
    return class ScrollListener extends Component {
        constructor(...args) {
            super(...args)
            this.state = {
                scrollX: typeof window === 'undefined' ? 0 : window.scrollX,
                scrollY: typeof window === 'undefined' ? 0 : window.scrollY,
            }
        }


        updateScrollXY = () => this.setState({
            scrollX: window.scrollX,
            scrollY: window.scrollY,
        })


        handleScroll = throttleTime > 0
            ? throttle(this.updateScrollXY, throttleTime)
            : this.updateScrollXY


        componentDidMount() {
            window.addEventListener('scroll', this.handleScroll)
        }


        componentWillUnmount() {
            window.removeEventListener('scroll', this.handleScroll)
        }


        render() {
            return (
                <Element
                    {...this.props}
                    scrollX={this.state.scrollX}
                    scrollY={this.state.scrollY}
                />
            )
        }
    }
}


export default withScrollProps
