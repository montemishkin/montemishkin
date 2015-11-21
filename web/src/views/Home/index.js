// third party imports
import React, {Component} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Splash from './Splash'
import Sage from './Sage'


@radium
export default class Home extends Component {
    scrollFrame({t, start, destination, previous}) {
        const {scrollY, scrollTo, requestAnimationFrame} = window

        // if we have not yet reached the destination
        // and the user has not canceled (by scrolling up)
        if (scrollY < destination && previous <= scrollY) {
            scrollTo(0, start + ((destination - start) * easeInOut(t)))
            requestAnimationFrame(() => this.scrollFrame({
                start,
                destination,
                previous: scrollY,
                t: t + 0.04,
            }))
        }
    }


    scrollDown() {
        const {scrollY, innerHeight, requestAnimationFrame} = window

        requestAnimationFrame(() => this.scrollFrame({
            t: 0,
            start: scrollY,
            destination: innerHeight,
            previous: scrollY,
        }))
    }


    render() {
        return (
            <div style={styles.container}>
                <Splash onClickScrollButton={this.scrollDown.bind(this)} />
                <Sage />
            </div>
        )
    }
}


function easeInOut(x) {
    // unique 3rd degree polynomial with
    // p(0) = 0
    // p(1) = 1
    // p'(0) = p'(1) = 0
    return x * x * (3 - (2 * x))
}
