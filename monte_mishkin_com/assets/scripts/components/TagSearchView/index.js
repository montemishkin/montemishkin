/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* common alt imports */
import connectToStores from 'alt/utils/connectToStores'
/* local imports */
import styles from './styles'
import TagStore from '../../stores/TagStore'
import TagActions from '../../actions/TagActions'


/**
 * View for page where you can search through tags used on the site.
 * @class
 */
@connectToStores
@radium
class TagSearchView extends React.Component {
    constructor(...args) {
        super(...args)

        this.state = {
            search_text: this.props.query.search || '',
        }
    }


    static getStores() {
        return [TagStore]
    }


    static getPropsFromStores() {
        return TagStore.getState()
    }


    // see https://github.com/goatslacker/alt/blob/master/src/utils/connectToStores.js#L74
    static componentDidConnect(props) {
        // if tags have not yet been loaded this session
        if (!props.has_loaded) {
            // fetch blog posts from server
            TagActions.fetchTags()
        }
    }


    componentWillReceiveProps(props) {
        this.setState({
            search_text: props.query.search || '',
        })
    }


    render() {
        return (<div style={styles.container}>
            <ul>
                {this.props.tags.map((tag) => (<li key={tag.id}>
                    {tag.name}
                </li>))}
            </ul>
        </div>)
    }
}


// export component
export default TagSearchView


// end of file
