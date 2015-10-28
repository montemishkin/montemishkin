// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'


/**
 * Simple search bar.
 */
@radium
export default class SearchBar extends Component {
    static propTypes = {
        placeholder: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func,
        style: PropTypes.object,
    }


    static defaultProps = {
        placeholder: 'search',
        value: '',
    }


    render() {
        // pull out the used props
        const {
            placeholder,
            value,
            onChange,
            style,
        } = this.props

        return (
            <input
                type='text'
                placeholder={placeholder}
                style={[
                    styles.input,
                    style,
                ]}
                value={value}
                onChange={onChange}
            />
        )
    }
}


// end of file
