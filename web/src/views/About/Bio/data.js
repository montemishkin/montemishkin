// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import List from 'components/List'
import Link from 'components/Link'


const technicalSkills = [
    {
        url: 'https://facebook.github.io/react/',
        src: '/static/images/react-logo.svg',
        alt: 'react logo',
    }, {
        url: 'https://nodejs.org/',
        src: '/static/images/node-logo.svg',
        alt: 'node logo',
    }, {
        url: 'https://www.djangoproject.com/',
        src: '/static/images/django-logo.svg',
        alt: 'django logo',
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
                {technicalSkills.map(({url, src, alt}, key) => (
                    <a href={url} style={styles.logoLink} key={key}>
                        <img src={src} alt={alt}/>
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
// wrap components in radium
].map(section => ({
    ...section,
    Text: radium(section.Text),
    Icon: radium(section.Icon),
}))





export default {
    sections,
}
