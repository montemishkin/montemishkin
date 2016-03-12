// third party imports
import React from 'react'
import {css} from 'aphrodite'
// local imports
import styles, {createContainerStyle} from './styles'
import CenteredSection from 'components/CenteredSection'


function BioSection({Title, Text, Icon, index}) {
    const renderedText = <Text className={css(styles.text)} key='a' />
    const renderedIcon = <Icon className={css(styles.icon)} key='b' />

    return (
        <CenteredSection style={createContainerStyle(index)}>
            <Title className={css(styles.title)} />
            <div className={css(styles.content)}>
                {
                    index % 2 === 1
                        ? [renderedText, renderedIcon]
                        : [renderedIcon, renderedText]
                }
            </div>
        </CenteredSection>
    )
}


export default BioSection
