// third party imports
import React from 'react'
import radium from 'radium'


function ErrorIcon(props) {
    return (
        <img
            {...props}
            src='/static/images/error.svg'
            alt='error icon'
        />
    )
}


export default radium(ErrorIcon)
