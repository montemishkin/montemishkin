// third party imports
import React, {PropTypes} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles from './styles'


function Banner({
    isLessThanLarge,
    Icon,
    title,
    subtitle,
    style,
    ...unusedProps,
}) {
    // default to infinity styling
    let iconStyle = styles.iconInfinity
    let titleStyle = styles.titleInfinity
    let subtitleStyle = styles.subtitleInfinity
    // if viewport is smaller than infinity
    if (isLessThanLarge) {
        // use medium styling
        iconStyle = styles.iconMedium
        titleStyle = styles.titleMedium
        subtitleStyle = styles.subtitleMedium
    }

    return (
        <header
            {...unusedProps}
            style={[styles.outerContainer, style]}
        >
            <div style={styles.innerContainer}>
                {Icon && <Icon style={iconStyle} />}
                <div style={styles.text}>
                    <h1 style={titleStyle}>
                        {title}
                    </h1>
                    {subtitle && (
                        <h2 style={subtitleStyle}>
                            {subtitle}
                        </h2>
                    )}
                </div>
            </div>
        </header>
    )
}


Banner.propTypes = {
    // react component
    Icon: PropTypes.func,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
}


function mapStateToProps(state) {
    return {isLessThanLarge: state.browser.lessThan.large}
}


export default connect(mapStateToProps)(radium(Banner))
