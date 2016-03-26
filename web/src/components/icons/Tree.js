// third party imports
import React from 'react'
import radium from 'radium'


function TreeIcon(props) {
    return (
        <img
            {...props}
            src='/static/images/tree.svg'
            alt='sketch of tree'
        />
    )
}


export default radium(TreeIcon)
