// third party imports
import React from 'react'


function Spinner(props) {
    return (
        <img
            {...props}
            className='spinner'
            src='/static/images/spinner.svg'
        />
    )
}


export default Spinner
