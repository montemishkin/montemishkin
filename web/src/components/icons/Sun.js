// third party imports
import React from 'react'
import radium from 'radium'


function SunIcon(props) {
    return (
        <img
            {...props}
            src='/static/images/sun.svg'
            alt='sun icon'
        />
    )
}


export default radium(SunIcon)
