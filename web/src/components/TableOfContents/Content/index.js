// third party imports
import React, {PropTypes} from 'react'
import {css} from 'aphrodite'
import radium from 'radium'
// local imports
import styles, {createListItemStyle} from './styles'
import markdown from 'util/markdown'


function processContent(content) {
    // create a div to mount content into
    const mountPoint = document.createElement('div')
    // mount content
    // TODO: ideally you would not be parsing here AND in
    // component that actually renders markdown
    mountPoint.innerHTML = markdown(content)
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


function Content({content}) {
    // if no content given
    if (content === '') {
        // render message saying no content
        return (
            <div className={css(styles.message)}>
                There is no content!
            </div>
        )
    }

    const {levels, headers} = processContent(content)

    // if no h* nodes found
    if (headers.length === 0) {
        // render message saying no headers
        return (
            <div className={css(styles.message)}>
                Sorry, it{"'"}s all just one section.
            </div>
        )
    }

    // render list of links to page contents
    return (
        <ul className={css(styles.list)}>
            {headers.map(({id, textContent, tagName}, key) => {
                const level = tagName.match(/^h([1-6])$/i)[1]
                const depth = levels.indexOf(level)
                const listItemStyle = createListItemStyle(depth)

                return (
                    <li
                        key={key}
                        style={listItemStyle}
                    >
                        <a
                            className={css(styles.link)}
                            href={`#${id}`}
                        >
                            {textContent}
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}


Content.propTypes = {
    content: PropTypes.string,
}


Content.defaultProps = {
    content: '',
}


export default radium(Content)
