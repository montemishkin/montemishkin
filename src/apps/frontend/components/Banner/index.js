// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'


@radium
export default class Banner extends Component {
    static propTypes = {
        imageSrc: PropTypes.string,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
    }


    render() {
        const {
            imageSrc,
            title,
            subtitle,
            children,
            style,
            ...unusedProps,
        } = this.props

        return (
            <header
                style={{
                    ...styles.outerContainer,
                    ...style,
                }}
                {...unusedProps}
            >
                <div style={styles.innerContainer}>
                    {imageSrc ? (
                        <img src={imageSrc} style={styles.image} />
                    ) : null}
                    <h1 style={styles.title}>
                        {title}
                    </h1>
                    {subtitle ? (
                        <h2 style={styles.subtitle}>
                            {subtitle}
                        </h2>
                    ) : null}
                    {children ? (
                        <div style={styles.childrenContainer}>
                            {children}
                        </div>
                    ) : null}
                </div>
            </header>
        )
    }
}
