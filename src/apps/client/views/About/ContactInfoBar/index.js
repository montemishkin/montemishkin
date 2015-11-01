// third party imports
import React, {Component} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import List from 'components/List'


// monte's contact data for the business card
const contactData = [
    {
        caption: 'Email',
        href: 'mailto:monte@mishkin.com',
        icon: 'envelope-o',
    }, {
        caption: 'Resume',
        href: '/static/resume.pdf',
        icon: 'file-text-o',
    }, {
        caption: 'GitHub',
        href: 'http://github.com/montemishkin',
        icon: 'github',
    }, {
        caption: 'SoundCloud',
        href: 'http://soundcloud.com/montemishkin',
        icon: 'soundcloud',
    },
]


/**
 * List of contact info and links.
 */
@radium
export default class ContactInfoBar extends Component {
    render() {
        return (
            <address style={styles.container}>
                <List style={styles.list} listItemStyle={styles.listItem}>
                    {contactData.map(({caption, href, icon}, key) => (
                        <a
                            key={key}
                            href={href}
                            target='_blank'
                            style={styles.link}
                        >
                            <i
                                style={styles.icon}
                                className={`fa fa-${icon}`}
                            />
                            <span style={styles.caption}>
                                {caption}
                            </span>
                        </a>
                    ))}
                </List>
            </address>
        )
    }
}
