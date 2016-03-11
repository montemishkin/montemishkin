// third party imports
import React from 'react'
import radium from 'radium'
import {Motion, spring} from 'react-motion'
import {connect} from 'react-redux'
// local imports
import styles from './styles'
import Link from 'components/Link'


function Foreground({isLessThanLarge}) {
    let linkStyle = styles.linkInfinity
    if (isLessThanLarge) {
        linkStyle = styles.linkMedium
    }

    return (
        <Motion
            defaultStyle={{
                y1: 100,
                y2: 100,
                x3: -200,
                y3: -20,
                t3: 60,
            }}
            style={{
                y1: spring(0, {stiffness: 170, damping: 20}),
                y2: spring(0, {stiffness: 150, damping: 20}),
                x3: spring(0, {stiffness: 170, damping: 26}),
                y3: spring(0, {stiffness: 170, damping: 26}),
                t3: spring(0, {stiffness: 80, damping: 12}),
            }}
            children={
                ({y1, y2, x3, y3, t3}) => (
                    <div style={styles.innerContainer}>
                        <img
                            src='/static/images/logo-main.svg'
                            style={{
                                ...styles.logo,
                                left: `${x3}vw`,
                                top: `${y3}vh`,
                                transform: `rotate(${t3}deg)`,
                            }}
                        />
                        <div>
                            <Link
                                to='/about'
                                style={{
                                    ...linkStyle,
                                    top: `${y1}vh`,
                                }}
                            >
                                about
                            </Link>
                            <Link
                                to='/posts'
                                style={{
                                    ...linkStyle,
                                    top: `${y2}vh`,
                                }}
                            >
                                blog
                            </Link>
                        </div>
                    </div>
                )
            }
        />
    )
}


function mapStateToProps(state) {
    return {isLessThanLarge: state.browser.lessThan.large}
}


export default connect(mapStateToProps)(radium(Foreground))
