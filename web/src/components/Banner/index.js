// third party imports
import React, {PropTypes} from 'react'
import radium from 'radium'
import {connect} from 'react-redux'
// local imports
import styles from './styles'


function Banner({
    isLessThanInfinity,
    Icon,
    title,
    subtitle,
    style,
    ...unusedProps,
}) {
    const iconStyles = isLessThanInfinity
        ? styles.iconMedium
        : styles.iconInfinity

    return (
        <header
            {...unusedProps}
            style={[styles.outerContainer, style]}
        >
            <div style={styles.innerContainer}>
                {Icon && <Icon style={iconStyles} />}
                <div style={styles.text}>
                    <h1 style={styles.title}>
                        {title}
                    </h1>
                    {subtitle && (
                        <h2 style={styles.subtitle}>
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
    return {isLessThanInfinity: state.browser.lessThan.infinity}
}


export default connect(mapStateToProps)(radium(Banner))
