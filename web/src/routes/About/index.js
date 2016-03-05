// third party imports
import React from 'react'
import radium from 'radium'
import Helmet from 'react-helmet'
// local imports
import styles from './styles'
import Banner from 'components/Banner'
import ProjectsLogo from 'components/Logos/Projects'
import Bio from './Bio'


function About() {
    return (
        <div>
            <Helmet title='About' />
            <Banner
                title='Monte Mishkin'
                subtitle='Web Developer / Friendly Person'
                Icon={ProjectsLogo}
            />
            <div style={styles.contentContainer}>
                <Bio style={styles.content} />
            </div>
        </div>
    )
}


export default radium(About)
