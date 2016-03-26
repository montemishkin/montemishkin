// third party imports
import React from 'react'
import Helmet from 'react-helmet'
// local imports
import data from './data'
import BioSection from './BioSection'
import Banner from 'components/Banner'
import ProjectsLogo from 'components/logos/Projects'


function About() {
    return (
        <div>
            <Helmet title='About' />
            <Banner
                title='Monte Mishkin'
                subtitle='Web Developer / Friendly Person'
                Icon={ProjectsLogo}
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
