// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import ArticlePreview from 'components/ArticlePreview'
import WideList from 'components/WideList'
import Banner from 'components/Banner'
import Spinner from 'components/Spinner'
import Loader from 'components/Loader'


class Tagle extends Component {
    static propTypes = {
        url: PropTypes.string,
        name: PropTypes.string,
        description: PropTypes.string,
        posts: PropTypes.arrayOf(
            PropTypes.shape({
                url: PropTypes.string,
                title: PropTypes.string,
                subtitle: PropTypes.string,
                created: PropTypes.shape({
                    year: PropTypes.number,
                    month: PropTypes.number,
                    day: PropTypes.number,
                }),
                tags: PropTypes.arrayOf(PropTypes.shape({
                    url: PropTypes.string,
                    name: PropTypes.string,
                    description: PropTypes.string,
                })),
            })
        ),
    }


    createContent = ({
        BannerIcon,
        title,
        subtitle,
        content,
    }) => (
        <article {...this.props}>
            <Banner
                Icon={BannerIcon}
                title={title}
                subtitle={subtitle}
            />
            {content}
        </article>
    )


    LoadingContent = () => this.createContent({
        BannerIcon: Spinner,
        title: 'Loading',
        subtitle: '...',
        content: (
            <section style={styles.contentContainer}>
                <div style={styles.content}>
                    Loading...
                </div>
            </section>
        ),
    })


    ErrorContent = () => this.createContent({
        BannerIcon: radium(
            props => <i {...props} className='fa fa-exclamation' />
        ),
        title: 'Woops',
        subtitle: 'something went wrong...',
        content: (
            <section style={styles.contentContainer}>
                <div style={styles.content}>
                    Error: {this.props.loadError.message}
                </div>
            </section>
        ),
    })


    LoadedContent = () => {
        const {
            name,
            description,
            posts,
        } = this.props

        return this.createContent({
            BannerIcon: radium(
                props => <i {...props} className='fa fa-tag' />
            ),
            title: name,
            subtitle: description,
            content: (
                <WideList>
                    {posts.length === 0
                        ? 'There are no posts with this tag.'
                        : posts.map((post, key) => (
                            <ArticlePreview {...post} key={key} />
                        ))
                    }
                </WideList>
            ),
        })
    }


    render() {
        const {
            props: {
                isLoading,
                loadError,
                loadDateTime,
                reload,
            },
            LoadingContent,
            ErrorContent,
            LoadedContent,
        } = this


        return (

            <Loader
                isInvalid={!loadDateTime && !loadError}
                isLoading={isLoading}
                error={loadError}
                reload={reload}
                LoadingContent={LoadingContent}
                ErrorContent={ErrorContent}
                LoadedContent={LoadedContent}
            />
        )
    }
}


export default radium(Tagle)
