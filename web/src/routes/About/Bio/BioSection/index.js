// third party imports
import React from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles, {createOuterContainerStyle} from './styles'


function BioSection({Title, Text, Icon, index, isLessThanInfinity}) {
    // default to styling for large viewport
    let titleStyle = styles.titleInfinity
    let textStyle = styles.textInfinity
    // if viewport is smaller than infinity
    if (isLessThanInfinity) {
        // use medium styling
        titleStyle = styles.titleMedium
        textStyle = styles.textMedium
    }

    const renderedText = <Text style={textStyle} key='a' />
    const renderedIcon = <Icon style={styles.icon} key='b' />

    return (
        <section style={createOuterContainerStyle(index)}>
            <div style={styles.innerContainer}>
                <Title style={titleStyle} />
                <div style={styles.content}>
                    {
                        index % 2 === 1
                            ? [renderedText, renderedIcon]
                            : [renderedIcon, renderedText]
                    }
                </div>
            </div>
        </section>
    )
}


function mapStateToProps(state) {
    return {isLessThanInfinity: state.browser.lessThan.infinity}
}


export default connect(mapStateToProps)(radium(BioSection))
