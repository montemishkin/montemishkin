// third party imports
import React from 'react'
import radium from 'radium'


function GrassIcon(props) {
    return (
        <img
            {...props}
            src='/static/images/grass.svg'
            alt='sketch of grass'
        />
    )
}


export default radium(GrassIcon)
