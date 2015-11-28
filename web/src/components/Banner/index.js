// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'


@radium
export default class Banner extends Component {
    static propTypes = {
        style: PropTypes.object,
        // react component
        Icon: PropTypes.func,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
    }


    render() {
        const {
            Icon,
            title,
            subtitle,
            children,
            style,
            ...unusedProps,
        } = this.props

        return (
            <header
                {...unusedProps}
                style={{
                    ...styles.outerContainer,
                    ...style,
                }}
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
}
