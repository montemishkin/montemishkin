// third party imports
import React, {Component} from 'react'
import radium from 'radium'
import Helmet from 'react-helmet'
// local imports
import styles from './styles'
import Banner from 'components/Banner'
import ProjectsLogo from 'components/Logos/Projects'
import ContactInfoBar from './ContactInfoBar'
import Bio from './Bio'


class About extends Component {
    render() {
        return (
            <div {...this.props}>
                <Helmet title='About' />
                <Banner
                    title='Monte Mishkin'
                    subtitle='Web Developer / Friendly Person'
                    Icon={props => <ProjectsLogo {...props} />}
                >
                    <ContactInfoBar />
                </Banner>
                <div style={styles.contentContainer}>
                    <div style={styles.content}>
                        <Bio />
                    </div>
                </div>
            </div>
        )
    }
}


export default radium(About)
