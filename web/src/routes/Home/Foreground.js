// third party imports
import React from 'react'
import {css} from 'aphrodite'
import radium from 'radium'
import {Motion, spring} from 'react-motion'
// local imports
import styles from './styles'
import Link from 'components/Link'


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
                    <div className={css(styles.innerContainer)}>
                        <img
                            src='/static/images/logo-main.svg'
                            alt='proper bird logo'
                            className={css(styles.logo)}
                            style={{
                                left: `${x3}vw`,
                                top: `${y3}vh`,
                                transform: `rotate(${t3}deg)`,
                            }}
                        />
                        <div>
                            <Link
                                to='/about'
                                className={css(styles.link)}
                                style={{top: `${y1}vh`}}
                            >
                                about
                            </Link>
                            <Link
                                to='/posts'
                                className={css(styles.link)}
                                style={{top: `${y2}vh`}}
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


export default radium(Foreground)
