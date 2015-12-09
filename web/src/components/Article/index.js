// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// import DisqusThread from 'react-disqus-thread'
// local imports
import styles from './styles'
import Banner from 'components/Banner'
import TagList from 'components/TagList'
import FormattedDate from 'components/FormattedDate'
import MarkdownContainer from 'components/MarkdownContainer'


@radium
export default class Article extends Component {
    static propTypes = {
        style: PropTypes.object,
        // react component
        BannerIcon: PropTypes.func,
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
        content: PropTypes.string.isRequired,
    }


    static defaultProps = {
        BannerIcon: radium(props => <span {...props} />),
    }


    render() {
        const {
            BannerIcon,
            // url,
            title,
            subtitle,
            created,
            tags,
            content,
            ...unusedProps,
        } = this.props

        return (
            <article {...unusedProps}>
                <Banner
                    Icon={BannerIcon}
                    title={title}
                    subtitle={subtitle}
                >
                    <div style={styles.infoBar}>
                        <TagList
                            style={styles.tagList}
                            linkStyle={styles.tagListLink}
                            tags={tags}
                        />
                        <FormattedDate
                            {...created}
                            style={styles.creationDate}
                        />
                    </div>
                </Banner>
                <section style={styles.contentContainer}>
                    <MarkdownContainer style={styles.content}>
                        {content}
                    </MarkdownContainer>
                </section>

                {/*
                <DisqusThread
                    // see: https://help.disqus.com/customer/en/portal/articles/472098-javascript-configuration-variables
                    shortname='montemishkin'
                    identifier={url}
                    title={title}
                    url={`http://monte.mishkin.com${url}`}
                />
                */}
            </article>
        )
    }
}
