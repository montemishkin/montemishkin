// third party imports
import React, {PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles, {createLinkStyle} from './styles'
import List from 'components/List'


function processContent(content) {
    // create a div to mount content into
    const mountPoint = document.createElement('div')
    // mount content
    mountPoint.innerHTML = content
    const children = mountPoint.children

    // list of all h* level numbers (as strings) found in content
    const levels = []
    // list of all h* dom nodes found in content
    const headers = []

    for (let level = 1; level <= 6; level++) {
        if (mountPoint.querySelector(`h${level}`)) {
            levels.push(`${level}`)
        }
    }

    // only bother to collect h* dom nodes if there even are any
    if (levels.length !== 0) {
        for (let i = 0; i < children.length; i++) {
            const child = children[i]

            if ((/^h[1-6]$/i).test(child.tagName)) {
                headers.push(child)
            }
        }
    }

    return {levels, headers}
}


function TableOfContents({content, style, ...unusedProps}) {
    // will either hold the list of links, or a simple message
    let listOrMessage
    // if no content given
    if (content === '') {
        // render message saying no content
        listOrMessage = (
            // TODO: make this sound nicer
            <span style={styles.message}>
                no content
            </span>
        )
    } else {
        const {levels, headers} = processContent(content)

        // if no h* nodes found
        if (headers.length === 0) {
            // render message saying no headers
            listOrMessage = (
                // TODO: make this sound nicer
                <span style={styles.message}>
                    no headers
                </span>
            )
        } else {
            // render list of links to page contents
            listOrMessage = (
                <List style={styles.list}>
                    {headers.map(({id, textContent, tagName}, key) => {
                        const level = tagName.match(/^h([1-6])$/i)[1]
                        const depth = levels.indexOf(level)
                        const linkStyle = createLinkStyle(depth)

                        return (
                            <a
                                key={key}
                                style={linkStyle}
                                href={`#${id}`}
                            >
                                {textContent}
                            </a>
                        )
                    })}
                </List>
            )
        }
    }

    return (
        <nav
            {...unusedProps}
            style={[styles.container, style]}
        >
            <div style={styles.title}>
                Table of Contents
            </div>
            {listOrMessage}
        </nav>
    )
}


TableOfContents.propTypes = {
    content: PropTypes.string,
}


TableOfContents.defaultProps = {
    content: '',
}


export default radium(TableOfContents)
