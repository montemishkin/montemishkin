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
        style: PropTypes.object,
        // link to full article
        link: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        // do I detail this out here even though it is just passed on?
        creationDate: PropTypes.string.isRequired,
        // do I detail this out here even though it is just passed on?
        tags: PropTypes.arrayOf(PropTypes.shape({
            link: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
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
                creationDate,
                tags,
                link,
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
                    to={link}
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
                    <FormattedDate date={creationDate} />
                </div>
            </section>
        )
    }
}
