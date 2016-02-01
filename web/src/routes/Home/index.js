// third party imports
import React, {Component} from 'react'
import radium from 'radium'
import Helmet from 'react-helmet'
import {Motion, spring} from 'react-motion'
// local imports
import styles from './styles'
import MainLogo from 'components/Logos/Main'
import Link from 'components/Link'


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
                {[BackBlock, FrontBlock, Foreground].map(
                    (Element, key) => <Element key={key} />
                )}
            </section>
        )
    }
}


function BackBlock() {
    return (
        <Motion
            defaultStyle={{top: -100}}
            style={{
                top: spring(0, {stiffness: 50, damping: 8}),
            }}
            children={
                ({top}) => (
                    <div style={styles.innerContainer}>
                        <div
                            style={{
                                ...styles.backBlock,
                                top: `${top}vh`,
                            }}
                        />
                    </div>
                )
            }
        />
    )
}


function FrontBlock() {
    return (
        <Motion
            defaultStyle={{left: 100}}
            style={{
                left: spring(0, {stiffness: 70, damping: 10}),
            }}
            children={
                ({left}) => (
                    <div style={styles.innerContainer}>
                        <div
                            style={{
                                ...styles.frontBlock,
                                left: `${left}vw`,
                            }}
                        />
                    </div>
                )
            }
        />
    )
}


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


export default radium(Home)
