// third party imports
import React, {PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Banner from 'components/Banner'
import WideList from 'components/WideList'
import Loader from 'components/Loader'


function Message({content}) {
    return (
        <div style={styles.messageContainer}>
            <span style={styles.message}>
                {content}
            </span>
        </div>
    )
}


function ListContent({items, PreviewComponent}) {
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


function LoadingContent(props) {
    return (
        <section style={styles.contentContainer}>
            <Message content={'Loading...'} />
            <ListContent {...props} />
        </section>
    )
}


function ErrorContent({error, ...unusedProps}) {
    return (
        <section style={styles.contentContainer}>
            <Message content={`Error: ${error.message}`} />
            <ListContent {...unusedProps} />
        </section>
    )
}


function LoadedContent(props) {
    return (
        <section style={styles.contentContainer}>
            <ListContent {...props} />
        </section>
    )
}


function ListView ({
    BannerIcon,
    title,
    subtitle,
    isLoading,
    loadDateTime,
    loadError,
    reload,
    ...unusedProps,
}) {
    return (
        <article {...unusedProps}>
            <Banner
                Icon={BannerIcon}
                title={title}
                subtitle={subtitle}
            />
            <Loader
                {...unusedProps}
                isInvalid={!loadDateTime && !loadError}
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


ListView.propTypes = {
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


export default radium(ListView)
