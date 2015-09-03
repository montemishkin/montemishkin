/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'


/**
 * Titleable content.
 * @class
 */
@radium
class Paper extends React.Component {
    render() {
        return (<div style={styles.container}>
            <h2 style={styles.title}>
                {this.props.title}
            </h2>
            <div style={styles.content_wrapper}>
                <div style={styles.content}>
                    {this.props.children}
                </div>
            </div>
        </div>)
    }
}


// assert prop type checking
Paper.PropTypes = {
    title: React.PropTypes.string,
}


// export component
export default Paper


// end of file
