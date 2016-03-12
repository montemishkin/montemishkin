// third party imports
import React from 'react'
import {css} from 'aphrodite'
import radium from 'radium'
import {Motion, spring} from 'react-motion'
// local imports
import styles from './styles'


function BackBlock() {
    return (
        <Motion
            defaultStyle={{top: -100}}
            style={{
                top: spring(0, {stiffness: 50, damping: 8}),
            }}
            children={
                ({top}) => (
                    <div className={css(styles.innerContainer)}>
                        <div
                            className={css(styles.backBlock)}
                            style={{top: `${top}vh`}}
                        />
                    </div>
                )
            }
        />
    )
}


export default radium(BackBlock)
