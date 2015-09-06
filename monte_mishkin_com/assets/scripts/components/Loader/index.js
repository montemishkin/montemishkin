/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'


/**
 * Loading spinner.
 * @class
 */
@radium
class Loader extends React.Component {
    render() {
        if (this.props.loading) {
            return (<img
                style={styles.image}
                alt='Loading Indicator'
                src='static/images/spinner.gif'
            />)
        } else if (this.props.error) {
            return (<p style={styles.error}>
                {this.props.error}
            </p>)
        }

        return (<div style={styles.container}>
            {this.props.children}
        </div>)
    }
}


// allow for type checking of `props`
Loader.propTypes = {
    loading: React.PropTypes.bool,
    error: React.PropTypes.string,
}


// export component
export default Loader


// end of file
