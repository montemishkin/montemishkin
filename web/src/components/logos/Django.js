// third party imports
import React from 'react'
import radium from 'radium'


function DjangoLogo(props) {
    return (
        <a
            {...props}
            target='_blank'
            href='https://www.djangoproject.com/'
        >
            <img
                src='/static/images/django.svg'
                alt='django logo'
            />
        </a>
    )
}


export default radium(DjangoLogo)
