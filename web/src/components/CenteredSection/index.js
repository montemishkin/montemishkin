// third party imports
import React from 'react'
import {css} from 'aphrodite'
// local imports
import styles from './styles'


function CenteredSection({children}) {
    return (
        <section className={css(styles.outerContainer)}>
            <div className={css(styles.innerContainer)}>
                {children}
            </div>
        </section>
    )
}


export default CenteredSection
