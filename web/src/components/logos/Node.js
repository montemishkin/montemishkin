// third party imports
import React from 'react'
import radium from 'radium'


function NodeLogo(props) {
    return (
        <a
            {...props}
            target='_blank'
            href='https://nodejs.org/'
        >
            <img
                src='/static/images/node.svg'
                alt='node logo'
            />
        </a>
    )
}


export default radium(NodeLogo)
