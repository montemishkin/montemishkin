// third party imports
import React from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles, {createContainerStyle} from './styles'
import CenteredSection from 'components/CenteredSection'


function BioSection({Title, Text, Icon, index, isLessThanLarge}) {
    // default to styling for large viewport
    let titleStyle = styles.titleInfinity
    let textStyle = styles.textInfinity
    let iconStyle = styles.iconInfinity
    // if viewport is smaller than infinity
    if (isLessThanLarge) {
        // use medium styling
        titleStyle = styles.titleMedium
        textStyle = styles.textMedium
        iconStyle = styles.iconMedium
    }

    const renderedText = <Text style={textStyle} key='a' />
    const renderedIcon = <Icon style={iconStyle} key='b' />

    return (
        <CenteredSection style={createContainerStyle(index)}>
            <Title style={titleStyle} />
            <div style={styles.content}>
                {
                    index % 2 === 1
                        ? [renderedText, renderedIcon]
                        : [renderedIcon, renderedText]
                }
            </div>
        </CenteredSection>
    )
}


function mapStateToProps(state) {
    return {isLessThanLarge: state.browser.lessThan.large}
}


export default connect(mapStateToProps)(radium(BioSection))
