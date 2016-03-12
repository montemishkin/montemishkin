// third party imports
import React, {Component, PropTypes} from 'react'
import {css} from 'aphrodite'
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
                className,
                ...unusedProps,
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

        // inject all styles regardless of state so that
        // we dont wait for injection when state changes
        css(styles.title)
        css(styles.subtitle)
        css(styles.titleHovered)
        css(styles.subtitleHovered)

        let titleStyle = styles.title
        let subtitleStyle = styles.subtitle
        if (linkIsHovered || linkIsFocused) {
            titleStyle = styles.titleHovered
            subtitleStyle = styles.subtitleHovered
        }

        return (
            <div
                {...unusedProps}
                className={`${css(styles.container)} ${className}`}
            >
                <Link
                    to={url}
                    className={css(styles.link)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                >
                    <h3 className={css(titleStyle)}>
                        {title}
                    </h3>
                    {subtitle && (
                        <p className={css(subtitleStyle)}>
                            {subtitle}
                        </p>
                    )}
                </Link>
            </div>
        )
    }
}


export default radium(LinkedTitleGroup)
