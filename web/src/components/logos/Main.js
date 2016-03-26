// third party imports
import React from 'react'
import radium from 'radium'


function ProjectLogo(props) {
    return (
        <img
            {...props}
            src='/static/images/logo-main.svg'
            alt='proper bird logo'
        />
    )
}


export default radium(ProjectLogo)
