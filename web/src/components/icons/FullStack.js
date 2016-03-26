// third party imports
import React from 'react'
import radium from 'radium'


function FullStackIcon(props) {
    return (
        <img
            {...props}
            src='/static/images/full-stack.svg'
            alt='full stack icon'
        />
    )
}


export default radium(FullStackIcon)
