// third party imports
import React from 'react'


function Spinner({className, ...unusedProps}) {
    return (
        <img
            {...unusedProps}
            className={`spinner ${className}`}
            src='/static/images/spinner.svg'
        />
    )
}


export default Spinner
