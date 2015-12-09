// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Link from 'components/Link'
import TagList from 'components/TagList'
import FormattedDate from 'components/FormattedDate'


/**
 * Shortened preview of a single article.
 */
@radium
export default class ArticlePreview extends Component {
    static propTypes = {
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        created: PropTypes.shape({
            year: PropTypes.number.isRequired,
            month: PropTypes.number.isRequired,
            day: PropTypes.number.isRequired,
        }).isRequired,
        tags: PropTypes.arrayOf(PropTypes.shape({
            url: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })).isRequired,
    }


    constructor(...args) {
        super(...args)
        this.state = {
            linkIsHovered: false,
            linkIsFocused: false,
        }
    }


    render() {
        const {
            props: {
                title,
                subtitle,
                created,
                tags,
                url,
                style,
                ...unusedProps,
            },
            state: {
                linkIsHovered,
                linkIsFocused,
            },
        } = this

        let titleStyle = styles.title
        let subtitleStyle = styles.subtitle
        if (linkIsHovered || linkIsFocused) {
            titleStyle = styles.titleHovered
            subtitleStyle = styles.subtitleHovered
        }

        return (
            <section
                style={[
                    styles.container,
                    style,
                ]}
                {...unusedProps}
            >
                <Link
                    to={url}
                    style={styles.link}
                    onMouseEnter={() => this.setState({linkIsHovered: true})}
                    onMouseLeave={() => this.setState({linkIsHovered: false})}
                    onFocus={() => this.setState({linkIsFocused: true})}
                    onBlur={() => this.setState({linkIsFocused: false})}
                >
                    <h2 style={titleStyle}>
                        {title}
                    </h2>
                    {subtitle && (
                        <span style={subtitleStyle}>
                            {subtitle}
                        </span>
                    )}
                </Link>
                <div style={styles.infoBar}>
                    <TagList tags={tags} />
                    <FormattedDate {...created} />
                </div>
            </section>
        )
    }
}
