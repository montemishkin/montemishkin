// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Link from 'components/Link'


class LinkedTitleGroup extends Component {
    static propTypes = {
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
    }


    constructor(...args) {
        super(...args)
        this.state = {
            linkIsHovered: false,
            linkIsFocused: false,
        }
    }


    handleMouseEnter = () => this.setState({linkIsHovered: true})
    handleMouseLeave = () => this.setState({linkIsHovered: false})
    handleFocus = () => this.setState({linkIsFocused: true})
    handleBlur = () => this.setState({linkIsFocused: false})


    render() {
        const {
            props: {
                url,
                title,
                subtitle,
            },
            state: {
                linkIsHovered,
                linkIsFocused,
            },
            handleMouseEnter,
            handleMouseLeave,
            handleFocus,
            handleBlur,
        } = this

        let titleStyle = styles.title
        let subtitleStyle = styles.subtitle
        if (linkIsHovered || linkIsFocused) {
            titleStyle = styles.titleHovered
            subtitleStyle = styles.subtitleHovered
        }

        return (
            <div style={styles.container}>
                <Link
                    to={url}
                    style={styles.link}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                >
                    <h3 style={titleStyle}>
                        {title}
                    </h3>
                    {subtitle && (
                        <p style={subtitleStyle}>
                            {subtitle}
                        </p>
                    )}
                </Link>
            </div>
        )
    }
}


export default radium(LinkedTitleGroup)
