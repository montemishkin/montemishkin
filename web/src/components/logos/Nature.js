// third party imports
import React from 'react'
import radium from 'radium'


function NatureLogo(props) {
    return (
        <img
            {...props}
            src='/static/images/logo-nature.svg'
            alt='free bird logo'
        />
    )
}


export default radium(NatureLogo)
