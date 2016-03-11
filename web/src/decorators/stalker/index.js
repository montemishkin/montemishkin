// third party imports
import React, {Component} from 'react'
import reactDOM from 'react-dom'
import throttle from 'lodash/function/throttle'
// local imports
import {createContainerStyle} from './styles'


function stalker(Element, throttleTime = 0) {
    class Stalker extends Component {
        constructor(...args) {
            super(...args)
            this.state = {ref: null}
        }


        boundForceUpdate = () => this.forceUpdate()


        handleScroll = throttleTime > 0
            ? throttle(this.boundForceUpdate, throttleTime)
            : this.boundForceUpdate


        componentDidMount() {
            window.addEventListener('scroll', this.handleScroll)
        }


        componentWillUnmount() {
            window.removeEventListener('scroll', this.handleScroll)
        }


        refHandler = ref => this.setState({
            // `ref` arg can be a react element or a dom node (or null)
            // but `state.ref` will always be the actual dom node (or null)
            ref: ref === null || ref.getBoundingClientRect
                ? ref
                : reactDOM.findDOMNode(ref),
        })


        render() {
            const {
                props: {style, ...unusedProps},
                state: {ref},
                refHandler,
            } = this

            const computedStyle = {
                ...createContainerStyle(ref),
                ...style,
            }

            return (
                <Element
                    {...unusedProps}
                    ref={refHandler}
                    style={computedStyle}
                />
            )
        }
    }


    return Stalker
}


export default stalker
