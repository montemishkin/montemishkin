// third party imports
import React from 'react'
import {css} from 'aphrodite'
import radium from 'radium'
// local imports
import styles, {createContainerStyle} from './styles'
import CenteredSection from 'components/CenteredSection'
import Markdown from 'components/Markdown'
import List from 'components/List'


function BioSection({title, text, icons, index}) {
    const renderedText = (
        <Markdown
            key='a'
            className={css(styles.text)}
            content={text}
        />
    )
    const renderedIcon = (
        <List
            key='b'
            className={css(styles.iconList)}
        >
            {icons.map((Icon, key) => (
                <Icon
                    key={key}
                    className={css(styles.icon)}
                />
            ))}
        </List>
    )

    return (
        <div style={createContainerStyle(index)}>
            <CenteredSection>
                <h3 className={css(styles.title)}>
                    {title}
                </h3>
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
