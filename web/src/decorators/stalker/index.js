// third party imports
import React, {Component} from 'react'
import reactDOM from 'react-dom'
import radium from 'radium'
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
                props,
                state: {ref},
                refHandler,
            } = this

            return (
                <div
                    ref={refHandler}
                    style={createContainerStyle(ref)}
                >
                    <Element {...props} />
                </div>
            )
        }
    }


    return radium(Stalker)
}


export default stalker
