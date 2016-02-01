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
                top: spring(0, {stiffness: 50, damping: 6}),
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
            defaultStyle={{left: -100}}
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
                x1: -100,
                x2: 100,
                x3: -140,
                y3: 210,
            }}
            style={{
                x1: spring(0),
                x2: spring(0),
                x3: spring(0),
                y3: spring(0),
            }}
            children={
                ({x1, x2, x3, y3}) => (
                    <div style={styles.innerContainer}>
                        <MainLogo
                            style={{
                                ...styles.logo,
                                left: `${x3}vw`,
                                top: `${y3}vh`,
                            }}
                        />
                        <div>
                            <Link
                                to='/about'
                                style={{
                                    ...styles.link,
                                    left: `${x1}vw`,
                                }}
                            >
                                About
                            </Link>
                            <Link
                                to='/posts'
                                style={{
                                    ...styles.link,
                                    left: `${x2}vw`,
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
