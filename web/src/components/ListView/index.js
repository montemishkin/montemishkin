// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import Banner from 'components/Banner'
import WideList from 'components/WideList'


@radium
export default class ListView extends Component {
    static propTypes = {
        // react component
        PreviewComponent: PropTypes.func.isRequired,
        // react component
        bannerIcon: PropTypes.func,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        items: PropTypes.array.isRequired,
    }


    static defaultProps = {
        bannerIcon: radium(props => <i {...props} className='fa fa-search' />),
    }


    get content() {
        const {items, PreviewComponent} = this.props

        // if any items present
        if (items.length > 0) {
            // render a list of them as content
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
        return (
            <section style={styles.messageContainer}>
                <span style={styles.message}>
                    No items.
                </span>
            </section>
        )
    }


    render() {
        const {
            content,
            props: {
                bannerIcon,
                title,
                subtitle,
                ...unusedProps,
            },
        } = this

        return (
            <article {...unusedProps}>
                <Banner
                    Icon={bannerIcon}
                    title={title}
                    subtitle={subtitle}
                />
                {content}
            </article>
        )
    }
}
