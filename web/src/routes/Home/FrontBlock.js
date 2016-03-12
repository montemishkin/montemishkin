// third party imports
import React from 'react'
import {css} from 'aphrodite'
import radium from 'radium'
import {Motion, spring} from 'react-motion'
// local imports
import styles from './styles'


function FrontBlock() {
    return (
        <Motion
            defaultStyle={{left: 100}}
            style={{
                left: spring(0, {stiffness: 70, damping: 10}),
            }}
            children={
                ({left}) => (
                    <div className={css(styles.innerContainer)}>
                        <div
                            className={css(styles.frontBlock)}
                            style={{left: `${left}vw`}}
                        />
                    </div>
                )
            }
        />
    )
}


export default radium(FrontBlock)
