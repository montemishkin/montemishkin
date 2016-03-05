// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import data from './data'
import BioSection from './BioSection'


function Bio() {
    return (
        <article>
            {data.map(({title, Text, Icon}, key) => (
                <BioSection
                    key={key}
                    index={key}
                    Title={_props => <h3 {..._props}>{title}</h3>}
                    Text={Text}
                    Icon={Icon}
                />
            ))}
        </article>
    )
}


export default radium(Bio)
