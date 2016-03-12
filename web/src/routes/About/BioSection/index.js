// third party imports
import React from 'react'
import {css} from 'aphrodite'
import radium from 'radium'
// local imports
import styles, {createContainerStyle} from './styles'
import CenteredSection from 'components/CenteredSection'


function BioSection({Title, Text, Icon, index}) {
    const renderedText = <Text className={css(styles.text)} key='a' />
    const renderedIcon = <Icon className={css(styles.icon)} key='b' />

    return (
        <div style={createContainerStyle(index)}>
            <CenteredSection>
                <Title className={css(styles.title)} />
                <div className={css(styles.content)}>
                    {
                        index % 2 === 1
                            ? [renderedText, renderedIcon]
                            : [renderedIcon, renderedText]
                    }
                </div>
            </CenteredSection>
        </div>
    )
}


export default radium(BioSection)
