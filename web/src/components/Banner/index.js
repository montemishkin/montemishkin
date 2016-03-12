// third party imports
import React, {PropTypes} from 'react'
import {css} from 'aphrodite'
import radium from 'radium'
// local imports
import styles from './styles'


function Banner({
    Icon,
    title,
    subtitle,
    className,
    ...unusedProps,
}) {
    return (
        <header
            {...unusedProps}
            className={`${css(styles.outerContainer)} ${className}`}
        >
            <div className={css(styles.innerContainer)}>
                {Icon && <Icon className={css(styles.icon)} />}
                <div className={css(styles.text)}>
                    <h1 className={css(styles.title)}>
                        {title}
                    </h1>
                    {subtitle && (
                        <h2 className={css(styles.subtitle)}>
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


export default radium(Banner)
