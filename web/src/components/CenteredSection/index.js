// third party imports
import React from 'react'
import {css} from 'aphrodite'
import radium from 'radium'
// local imports
import styles from './styles'


function CenteredSection({
    innerClassName,
    innerStyle,
    children,
    className,
    ...unusedProps,
}) {
    return (
        <section
            {...unusedProps}
            className={`${css(styles.outerContainer)} ${className}`}
        >
            <div
                style={innerStyle}
                className={`${css(styles.innerContainer)} ${innerClassName}`}
            >
                {children}
            </div>
        </section>
    )
}


export default radium(CenteredSection)
