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

        let renderedImage
        if (imageSrc) {
            renderedImage = <img src={imageSrc} style={styles.image} />
        }
        let renderedSubtitle
        if (subtitle) {
            renderedSubtitle = (
                <h2 style={styles.subtitle}>
                    {subtitle}
                </h2>
            )
        }
        let renderedChildrenContainer
        if (children) {
            renderedChildrenContainer = (
                <div style={styles.childrenContainer}>
                    {children}
                </div>
            )
        }

        return (
            <header
                style={{
                    ...styles.outerContainer,
                    ...style,
                }}
                {...unusedProps}
            >
                <div style={styles.innerContainer}>
                    {renderedImage}
                    <h1 style={styles.title}>
                        {title}
                    </h1>
                    {renderedSubtitle}
                    {renderedChildrenContainer}
                </div>
            </header>
        )
    }
}
