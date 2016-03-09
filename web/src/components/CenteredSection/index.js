// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import styles from './styles'


function CenteredSection({children, style, innerStyle, ...unusedProps}) {
    return (
        <section
            {...unusedProps}
            style={[styles.outerContainer, style]}
        >
            <div style={[styles.innerContainer, innerStyle]}>
                {children}
            </div>
        </section>
    )
}


export default radium(CenteredSection)
