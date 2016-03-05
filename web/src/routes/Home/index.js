// third party imports
import React from 'react'
import radium from 'radium'
import Helmet from 'react-helmet'
// local imports
import styles from './styles'
import BackBlock from './BackBlock'
import FrontBlock from './FrontBlock'
import Foreground from './Foreground'


function Home() {
    return (
        <section style={styles.outerContainer}>
            <Helmet title='Home' />
            {[BackBlock, FrontBlock, Foreground].map(
                (Element, key) => <Element key={key} />
            )}
        </section>
    )
}


export default radium(Home)
