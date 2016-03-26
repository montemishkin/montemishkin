// third party imports
import React from 'react'
import radium from 'radium'


function BlogLogo(props) {
    return (
        <img
            {...props}
            src='/static/images/logo-blog.svg'
            alt='hip bird logo'
        />
    )
}


export default radium(BlogLogo)
