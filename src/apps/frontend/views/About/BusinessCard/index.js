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
 * Picture, name, and links to profiles/contact.
 */
@radium
export default class BusinessCard extends Component {
    render() {
        return (<div style={styles.container}>
            <img
                style={styles.image}
                alt='Monte Mishkin'
                src='/static/images/finchz_medium.jpg'
            />
            <div style={styles.notImage}>
                <p style={styles.name}>
                    Monte Mishkin
                </p>
                <address style={styles.address}>
                    <List style={styles.addressList} listItemStyle={styles.addressListItem}>
                        {contactData.map(({caption, href, icon}, index) => (
                            <a
                                key={index}
                                href={href}
                                style={styles.link}
                            >
                                <figure style={styles.figure}>
                                    <i
                                        style={styles.icon}
                                        className={`fa fa-${icon}`}
                                    />
                                    <figcaption style={styles.caption}>
                                        {caption}
                                    </figcaption>
                                </figure>
                            </a>
                        ))}
                    </List>
                </address>
            </div>
        </div>)
    }
}
