// third party imports
import React, {Component} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import List from 'components/List'
import Link from 'components/Link'
import ReactLogo from 'components/Logos/React'
import NodeLogo from 'components/Logos/Node'
import DjangoLogo from 'components/Logos/Django'


@radium
export default class Bio extends Component {
    render() {
        const {style, ...unusedProps} = this.props
        return (
            <article
                {...unusedProps}
                style={[
                    styles.container,
                    style,
                ]}
            >
                <section style={styles.section}>
                    <h3 style={styles.sectionTitle}>
                        Hello
                    </h3>
                    <p style={styles.p}>
                        I{"'"}m a web developer with a passion for designing
                        great experiences at every level of the technology stack.
                    </p>
                </section>
                <section style={styles.section}>
                    <h3 style={styles.sectionTitle}>
                        Technical Skills
                    </h3>
                    <p style={styles.p}>
                        Check out my
                        {' '}<a
                            style={styles.link}
                            target='_blank'
                            href='/static/resume.pdf'
                        >
                            resume
                        </a>{' '}
                        for the full details, but for the most part, my
                        projects involve some combination of these awesome
                        technologies:
                    </p>
                    <List style={styles.logoList} listItemStyle={styles.logoListItem}>
                        {mainTechnologies.map(({url, component: Comp}, key) => (
                            <a href={url} style={styles.logoLink} key={key}>
                                <Comp style={styles.logo} />
                            </a>
                        ))}
                    </List>
                    <p style={styles.p}>
                        You can keep up with my latest works over
                        {' '}<Link style={styles.link} to='/projects'>
                            here
                        </Link>
                        !
                    </p>
                </section>
                <section style={styles.section}>
                    <h3 style={styles.sectionTitle}>
                        Blog
                    </h3>
                    <p style={styles.p}>
                        I have yet to get in the habit of writing blog posts consistently,
                        but over at my
                        {' '}<Link style={styles.link} to='/posts'>
                            blog
                        </Link>{' '}
                        you can expect to find articles relating to:
                    </p>
                    <List style={styles.list} listItemStyle={styles.listItem}>{[
                        'my experiences with various technologies.',
                        'meanderings about math and/or physics.',
                        'other assorted musings.',
                    ]}</List>
                </section>
            </article>
        )
    }
}


const mainTechnologies = [
    {
        url: 'https://facebook.github.io/react/',
        component: ReactLogo,
    }, {
        url: 'https://nodejs.org/',
        component: NodeLogo,
    }, {
        url: 'https://www.djangoproject.com/',
        component: DjangoLogo,
    },
]
