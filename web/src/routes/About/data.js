// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import List from 'components/List'


const technicalSkills = [
    {
        url: 'https://facebook.github.io/react/',
        src: '/static/images/react.svg',
        alt: 'react logo',
    }, {
        url: 'https://nodejs.org/',
        src: '/static/images/node.svg',
        alt: 'node logo',
    }, {
        url: 'https://www.djangoproject.com/',
        src: '/static/images/django.svg',
        alt: 'django logo',
    },
]


// TODO: this file is ridiculous
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
                    href='/static/monte_mishkin_resume.pdf'
                    key='resume'
                >
                    resume
                </a>{' '}
                for the full details, but for the most part, my
                {' '}<a
                    style={styles.link}
                    target='_blank'
                    href='https://github.com/montemishkin'
                    key='projects'
                >
                    projects
                </a>{' '}
                involve some combination of these awesome
                technologies.
            </p>
        ),
        Icon: ({style}) => (
            <List style={[styles.logoList, style]}>
                {technicalSkills.map(({url, src, alt}, key) => (
                    <a
                        target='_blank'
                        href={url}
                        style={styles.logoLink}
                        key={key}
                    >
                        <img src={src} alt={alt}/>
                    </a>
                ))}
            </List>
        ),
    }, {
        title: 'Interested?',
        Text: props => (
            <p {...props}>
                Check out my
                {' '}<a
                    style={styles.link}
                    target='_blank'
                    href='https://github.com/montemishkin'
                    key='GitHub'
                >
                    GitHub
                </a>
                , send me an
                {' '}<a
                    style={styles.link}
                    target='_blank'
                    href='mailto:monte@mishkin.com'
                    key='email'
                >
                    email
                </a>
                , or take a look at my
                {' '}<a
                    style={styles.link}
                    target='_blank'
                    href='/static/monte_mishkin_resume.pdf'
                    key='resume'
                >
                    resume
                </a>{' '}
                for more details.
            </p>
        ),
        Icon: props => <img {...props} src='/static/images/logo-chill.svg'/>,
    },
// wrap components in radium
].map(section => ({
    ...section,
    Text: radium(section.Text),
    Icon: radium(section.Icon),
}))





export default sections
