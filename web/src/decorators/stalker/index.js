// third party imports
import React, {Component} from 'react'
import reactDOM from 'react-dom'
// local imports
import {createContainerStyle} from './styles'
import withScrollProps from 'decorators/withScrollProps'


function stalker(Element) {
    class Stalker extends Component {
        constructor(...args) {
            super(...args)
            this.state = {
                ref: null,
                initialRect: null,
            }
        }


        refHandler = ref => {
            // `ref` can be a react element or a dom node (or null)
            // but `node` will always be the actual dom node (or null)
            const node = ref === null || ref.getBoundingClientRect
                ? ref
                : reactDOM.findDOMNode(ref)

            this.setState({
                ref: node,
                initialRect: node === null
                    ? null
                    : node.getBoundingClientRect(),
            })
        }


        render() {
            const {
                props: {
                    /* eslint-disable no-unused-vars */
                    // so that it is not passed on
                    scrollX,
                    /* eslint-enable no-unused-vars */
                    scrollY,
                    style,
                    ...unusedProps,
                },
                state: {
                    ref,
                    initialRect,
                },
                refHandler,
            } = this

            const computedStyle = {
                ...createContainerStyle({ref, initialRect, scrollY}),
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


    return withScrollProps(Stalker)
}


export default stalker
