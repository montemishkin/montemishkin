// third party imports
import React from 'react'
// local imports
import styles from './styles'
import List from 'components/List'
import Link from 'components/Link'
import ReactLogo from 'components/Logos/React'
import NodeLogo from 'components/Logos/Node'
import DjangoLogo from 'components/Logos/Django'


const technicalSkills = [
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


const sections = [
    {
        title: 'Hello',
        Text: props => (
            <p {...props}>
                {`I'm a web developer with a passion for designing great experiences at every level of the technology stack.`}
            </p>
        ),
        Icon: props => <img {...props} src='/static/images/full-stack.svg' />,
    }, {
        title: 'Technical Skills',
        Text: props => (
            <p {...props}>
                Check out my
                {' '}<a
                    style={styles.link}
                    target='_blank'
                    href='/static/resume.pdf'
                >
                    resume
                </a>{' '}
                for the full details, but for the most part, my
                {' '}<Link style={styles.link} to='/projects'>
                    projects
                </Link>{' '}
                involve some combination of these awesome
                technologies.
            </p>
        ),
        Icon: ({style, ...unusedProps}) => (
            <List {...unusedProps} style={[styles.logoList, style]}>
                {technicalSkills.map(({url, component: Comp}, key) => (
                    <a href={url} style={styles.logoLink} key={key}>
                        <Comp />
                    </a>
                ))}
            </List>
        ),
    }, {
        title: 'Blog',
        Text: props => (
            <div {...props}>
                <p>
                    I have yet to get in the habit of writing blog posts consistently,
                    but over at my
                    {' '}<Link style={styles.link} to='/posts'>
                        blog
                    </Link>{' '}
                    you can expect to find articles relating to:
                </p>
                <List style={styles.blogDescriptionList}>
                    {[
                        'my experiences with various technologies.',
                        'meanderings about math and/or physics.',
                        'other assorted musings.',
                    ]}
                </List>
            </div>
        ),
        Icon: props => <img {...props} src='/static/images/slate.svg'/>,
    },
]


export default {
    sections,
}
