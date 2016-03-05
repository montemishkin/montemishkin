// third party imports
import React from 'react'
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
                    <div style={styles.innerContainer}>
                        <div
                            style={{
                                ...styles.frontBlock,
                                left: `${left}vw`,
                            }}
                        />
                    </div>
                )
            }
        />
    )
}


export default radium(FrontBlock)
