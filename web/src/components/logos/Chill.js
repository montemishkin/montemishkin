// third party imports
import React from 'react'
import radium from 'radium'


function ChillLogo(props) {
    return (
        <img
            {...props}
            src='/static/images/logo-chill.svg'
            alt='chill bird logo'
        />
    )
}


export default radium(ChillLogo)
