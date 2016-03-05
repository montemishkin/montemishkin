// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import data from './data'
import ContactInfoBar from './ContactInfoBar'
import BioSection from './BioSection'


function Bio(props) {
    return (
        <article {...props}>
            <ContactInfoBar />
            {data.map(({title, Text, Icon}, key) => (
                <BioSection
                    key={key}
                    textIsFirst={key % 2 === 1}
                    Title={_props => <h3 {..._props}>{title}</h3>}
                    Text={Text}
                    Icon={Icon}
                />
            ))}
        </article>
    )
}


export default radium(Bio)
