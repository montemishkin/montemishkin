// third party imports
import React from 'react'
import radium from 'radium'


function ReactLogo(props) {
    return (
        <a
            {...props}
            target='_blank'
            href='https://facebook.github.io/react/'
        >
            <img
                src='/static/images/react.svg'
                alt='react logo'
            />
        </a>
    )
}


export default radium(ReactLogo)
