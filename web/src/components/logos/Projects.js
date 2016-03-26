// third party imports
import React from 'react'
import radium from 'radium'


function ProjectsLogo(props) {
    return (
        <img
            {...props}
            src='/static/images/logo-projects.svg'
            alt='hard working bird logo'
        />
    )
}


export default radium(ProjectsLogo)
