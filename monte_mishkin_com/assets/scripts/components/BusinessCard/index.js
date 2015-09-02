/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'


// monte's contact data for the business card
const data = [
    {
        caption: 'Email',
        href: 'mailto:montemishkin@gmail.com',
        src: 'static/images/Message-50.png',
        alt: 'Email Symbol',
    }, {
        caption: 'Resume',
        href: 'static/resume.pdf',
        src: 'static/images/Document-50.png',
        alt: 'Resume Symbol',
    }, {
        caption: 'GitHub',
        href: 'http://github.com/montemishkin',
        src: 'static/images/GitHub-Mark-64px.png',
        alt: 'GitHub Logo',
    }, {
        caption: 'Soundcloud',
        href: 'http://soundcloud.com/montemishkin',
        src: 'static/images/sc_grey_96x48.png',
        alt: 'Soundcloud Logo',
    },
]


/**
 * Picture, name, and links to profiles/contact.
 * @class
 */
@radium
class BusinessCard extends React.Component {
    render() {
        return (<div style={styles.container}>
            <img
                style={styles.image}
                alt='Monte Mishkin'
                src='static/images/square_finch.jpg'
            />
            <div style={styles.name_and_address}>
                <p style={styles.name}>
                    Monte Mishkin
                </p>
                <address style={styles.address}>
                    <ul style={styles.address_list}>
                        {data.map(({caption, href, src, alt}, index) => (
                            <li
                                key={index}
                                style={styles.address_list_item}
                            >
                                <a
                                    href={href}
                                    style={styles.address_list_item_link}
                                >
                                    <figure style={styles.figure}>
                                        <img
                                            style={styles.icon}
                                            src={src}
                                            alt={alt}
                                        />
                                        <figcaption>
                                            {caption}
                                        </figcaption>
                                    </figure>
                                </a>
                            </li>
                        ))}
                    </ul>
                </address>
            </div>
        </div>)
    }
}


// export component
export default BusinessCard


// end of file
