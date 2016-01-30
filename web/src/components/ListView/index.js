// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Banner from 'components/Banner'
import WideList from 'components/WideList'
import Loader from 'components/Loader'


class ListView extends Component {
    static propTypes = {
        // react component
        PreviewComponent: PropTypes.func.isRequired,
        // react component
        BannerIcon: PropTypes.func,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        items: PropTypes.array.isRequired,
        isLoading: PropTypes.bool.isRequired,
        loadDateTime: PropTypes.number,
        loadError: PropTypes.object,
        reload: PropTypes.func,
    }


    static defaultProps = {
        BannerIcon: radium(props => <i {...props} className='fa fa-search' />),
    }


    Message = ({content}) => (
        <div style={styles.messageContainer}>
            <span style={styles.message}>
                {content}
            </span>
        </div>
    )


    ListContent = () => {
        const {
            Message,
            props: {items, PreviewComponent},
        } = this

        // if any items present
        if (items.length > 0) {
            // render a list of them
            return (
                <WideList>
                    {items.map((item, key) => (
                        <PreviewComponent {...item} key={key} />
                    ))}
                </WideList>
            )
        }
        // otherwise no items
        // so render a message indicating no items
        return <Message content='No items.' />
    }


    LoadingContent = () => {
        const {ListContent, Message} = this

        return (
            <section style={styles.contentContainer}>
                <Message content={'Loading...'} />
                <ListContent />
            </section>
        )
    }


    ErrorContent = () => {
        const {
            ListContent,
            Message,
            props: {loadError},
        } = this

        return (
            <section style={styles.contentContainer}>
                <Message content={`Error: ${loadError}`} />
                <ListContent />
            </section>
        )
    }


    LoadedContent = () => {
        const {
            ListContent,
        } = this

        return (
            <section style={styles.contentContainer}>
                <ListContent />
            </section>
        )
    }


    render() {
        const {
            LoadingContent,
            ErrorContent,
            LoadedContent,
            props: {
                BannerIcon,
                title,
                subtitle,
                isLoading,
                loadDateTime,
                loadError,
                reload,
                ...unusedProps,
            },
        } = this

        return (
            <article {...unusedProps}>
                <Banner
                    Icon={BannerIcon}
                    title={title}
                    subtitle={subtitle}
                />
                <Loader
                    isInvalid={typeof loadDateTime === 'undefined'}
                    isLoading={isLoading}
                    error={loadError}
                    reload={reload}
                    LoadingContent={LoadingContent}
                    ErrorContent={ErrorContent}
                    LoadedContent={LoadedContent}
                />
            </article>
        )
    }
}


export default radium(ListView)
