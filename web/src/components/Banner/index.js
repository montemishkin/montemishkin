// third party imports
import React, {PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'


function Banner({
    Icon,
    title,
    subtitle,
    children,
    style,
    ...unusedProps,
}) {
    return (
        <header
            {...unusedProps}
            style={[styles.outerContainer, style]}
        >
            <div style={styles.innerContainer}>
                {Icon && (
                    <Icon style={styles.icon} />
                )}
                <h1 style={styles.title}>
                    {title}
                </h1>
                {subtitle && (
                    <span style={styles.subtitle}>
                        {subtitle}
                    </span>
                )}
                {children && (
                    <div style={styles.childrenContainer}>
                        {children}
                    </div>
                )}
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


export default radium(Banner)
