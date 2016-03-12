// third party imports
import React from 'react'
import radium from 'radium'
import Helmet from 'react-helmet'
// local imports
import data from './data'
import BioSection from './BioSection'
import Banner from 'components/Banner'


function About() {
    return (
        <div>
            <Helmet title='About' />
            <Banner
                title='Monte Mishkin'
                subtitle='Web Developer / Friendly Person'
                Icon={radium(props =>
                    <img {...props} src='/static/images/logo-projects.svg' />
                )}
            />
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
        </div>
    )
}


export default About
