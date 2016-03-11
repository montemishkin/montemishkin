// third party imports
import React from 'react'
import radium from 'radium'
// local imports
import styles, {createContainerStyle} from './styles'
import Content from './Content'
import withScrollProps from 'decorators/withScrollProps'


class TableOfContents extends React.Component {
    constructor(...args) {
        super(...args)
        this.state = {
            ref: null,
            initialRect: null,
        }
    }


    refHandler = ref => this.setState({
        ref,
        initialRect: ref === null ? null : ref.getBoundingClientRect(),
    })


    render() {
        const {
            props: {
                /* eslint-disable no-unused-vars */
                // so that it is not passed on
                scrollX,
                /* eslint-enable no-unused-vars */
                scrollY,
                content,
                style,
                ...unusedProps,
            },
            state: {
                ref,
                initialRect,
            },
            refHandler,
        } = this

        const computedStyle = {
            ...createContainerStyle({ref, initialRect, scrollY}),
            ...style,
        }

        return (
            <nav
                {...unusedProps}
                style={computedStyle}
                ref={refHandler}
            >
                <div style={styles.title}>
                    Table of Contents
                </div>
                <Content content={content} />
            </nav>
        )
    }
}


export default withScrollProps(radium(TableOfContents))
