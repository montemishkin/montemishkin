// third party imports
import React, {Component} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import List from 'components/List'


// monte's contact data for the business card
const data = [
    {
        caption: 'Email',
        href: 'mailto:monte@mishkin.com',
        src: '/static/images/Message-50.png',
        alt: 'Email Symbol',
    }, {
        caption: 'Resume',
        href: '/static/resume.pdf',
        src: '/static/images/Document-50.png',
        alt: 'Resume Symbol',
    }, {
        caption: 'GitHub',
        href: 'http://github.com/montemishkin',
        src: '/static/images/GitHub-Mark-64px.png',
        alt: 'GitHub Logo',
    }, {
        caption: 'SoundCloud',
        href: 'http://soundcloud.com/montemishkin',
        src: '/static/images/sc_grey_96x48.png',
        alt: 'SoundCloud Logo',
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
            <div style={styles.not_image}>
                <p style={styles.name}>
                    Monte Mishkin
                </p>
                <address style={styles.address}>
                    <List style={styles.address_list} list_item_style={styles.address_list_item}>
                        {data.map(({caption, href, src, alt}, index) => (
                            <a
                                key={index}
                                href={href}
                                style={styles.link}
                            >
                                <figure style={styles.figure}>
                                    <img
                                        style={styles.icon}
                                        src={src}
                                        alt={alt}
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


// end of file
