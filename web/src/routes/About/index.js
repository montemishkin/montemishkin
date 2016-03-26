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
                {data.map(({title, text, icons}, key) => (
                    <BioSection
                        key={key}
                        index={key}
                        title={title}
                        text={text}
                        icons={icons}
                    />
                ))}
            </article>
        </div>
    )
}


export default About
