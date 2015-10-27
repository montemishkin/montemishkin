// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'


/**
 * This does NOT render markdown.  It merely ensures that the contained
 * markdown will get proper styling from external CSS (by being a child
 * of a .markdown wrapper).
 */
@radium
export default class MarkdownContainer extends Component {
    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node.isRequired,
    }


    static defaultProps = {
        className: 'markdown',
    }


    render() {
        const {
            className,
            children,
            ...unusedProps,
        } = this.props

        return (
            <section
                {...unusedProps}
                className={className}
                dangerouslySetInnerHTML={{__html: children}}
            />
        )
    }
}
