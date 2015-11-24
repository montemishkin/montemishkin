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
import AbletonLogo from 'components/Logos/Ableton'
import BlenderLogo from 'components/Logos/Blender'
import UnityLogo from 'components/Logos/Unity'


@radium
export default class Bio extends Component {
    render() {
        return (
            <article style={styles.container}>
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
                        However, on occasion, you might see me put out an
                        album, or maybe a video game. To that end, here are
                        some other great programs I have experience with:
                    </p>
                    <List style={styles.logoList} listItemStyle={styles.logoListItem}>
                        {otherTechnologies.map(({url, component: Comp}, key) => (
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
                        Other Hats I Wear
                    </h3>
                    <List style={styles.list} listItemStyle={styles.listItem}>{[
                        'Aspiring video game developer',
                        'Musician',
                        'Educator',
                        'Avocational mathematician and physicist',
                        'Analytical thinker with excellent problem solving skills',
                    ]}</List>
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


const otherTechnologies = [
    {
        url: 'https://www.ableton.com/live/',
        component: AbletonLogo,
    }, {
        url: 'http://www.blender.org/',
        component: BlenderLogo,
    }, {
        url: 'http://unity3d.com/',
        component: UnityLogo,
    },
]
