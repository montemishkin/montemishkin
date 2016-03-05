// third party imports
import React from 'react'
import radium from 'radium'
import {Motion, spring} from 'react-motion'
// local imports
import styles from './styles'
import Link from 'components/Link'
import MainLogo from 'components/Logos/Main'


function Foreground() {
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
                        <MainLogo
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
                                    ...styles.link,
                                    top: `${y1}vh`,
                                }}
                            >
                                About
                            </Link>
                            <Link
                                to='/posts'
                                style={{
                                    ...styles.link,
                                    top: `${y2}vh`,
                                }}
                            >
                                Blog
                            </Link>
                        </div>
                    </div>
                )
            }
        />
    )
}


export default radium(Foreground)
