// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import {Motion, spring, presets} from 'react-motion'
// local imports
import styles from './styles'


class Letter extends Component {
    static propTypes = {
        letter: PropTypes.string,
        x0: PropTypes.number,
        y0: PropTypes.number,
        // react-motion spring config
        xSpring: PropTypes.object,
        // react-motion spring config
        ySpring: PropTypes.object,
    }

    static defaultProps = {
        x0: 0,
        y0: 0,
        xSpring: spring(0),
        ySpring: spring(0),
    }


    motionCallback = ({x, y}) => (
        <span style={{
            ...styles.main,
            left: x,
            top: y,
        }}>
            {this.props.letter}
        </span>
    )


    render() {
        const {
            props: {
                x0,
                y0,
                xSpring,
                ySpring,
            },
            motionCallback,
        } = this

        return (
            <Motion
                defaultStyle={{x: x0, y: y0}}
                style={{x: xSpring, y: ySpring}}
            >
                {motionCallback}
            </Motion>
        )
    }
}


export default radium(Letter)
