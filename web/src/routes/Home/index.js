// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
import Helmet from 'react-helmet'
import {Motion, spring, presets} from 'react-motion'
// local imports
import styles from './styles'
import Letter from './Letter'


class Home extends Component {
    render() {
        const {style, ...unusedProps} = this.props

        return (
            <section
                {...unusedProps}
                style={[
                    styles.outerContainer,
                    style,
                ]}
            >
                <Helmet title='Home' />
                <div style={styles.innerContainer}>
                    <Motion
                        defaultStyle={{top: -100}}
                        style={{top: spring(0)}}
                        children={({top}) => <div
                            style={{
                                ...styles.backBlock,
                                top: `${top}vh`,
                            }}
                        />}
                    />
                </div>
                <div style={styles.innerContainer}>
                    <Motion
                        defaultStyle={{left: -100}}
                        style={{left: spring(0)}}
                        children={({left}) => <div
                            style={{
                                ...styles.frontBlock,
                                left: `${left}vw`,
                            }}
                        />}
                    />
                </div>
                <div style={styles.innerContainer}>
                    <Letter
                        letter='M'
                        x0={-100}
                        y0={80}
                    />
                    <Letter
                        letter='G'
                        x0={-50}
                        y0={-120}
                    />
                    <Letter
                        letter='M'
                        x0={110}
                        y0={20}
                    />
                </div>
            </section>
        )
    }
}


export default radium(Home)
