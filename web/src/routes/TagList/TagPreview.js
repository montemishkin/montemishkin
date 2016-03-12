// third party imports
import React, {PropTypes} from 'react'
// local imports
import LinkedTitleGroup from 'components/LinkedTitleGroup'


function TagPreview({url, name, description}) {
    return (
        <LinkedTitleGroup
            url={url}
            title={name}
            subtitle={description}
        />
    )
}


TagPreview.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
}


export default TagPreview
