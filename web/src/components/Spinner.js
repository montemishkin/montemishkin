// third party imports
import React from 'react'
import radium from 'radium'


function Spinner({className, ...unusedProps}) {
    return (
        <img
            {...unusedProps}
            className={`spinner ${className}`}
            src='/static/images/spinner.svg'
        />
    )
}


export default radium(Spinner)
