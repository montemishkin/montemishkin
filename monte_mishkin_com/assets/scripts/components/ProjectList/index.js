/* common react imports */
import React from 'react/addons'
import radium from 'radium'
/* local imports */
import styles from './styles'
import ProjectPreview from '../ProjectPreview'


/**
 * List of project previews.
 * @class
 */
@radium
class ProjectList extends React.Component {
    render() {
        return (<ul style={styles.list}>
            {this.props.projects.map((project, index, array) => {
                // default to regular `list_item` style
                let list_item_style = styles.list_item
                // if this is the last item
                if (index === array.length - 1) {
                    // then use special `list_item_last` style
                    list_item_style = styles.list_item_last
                }

                return (
                    <li
                        style={list_item_style}
                        key={project.id}
                    >
                        <ProjectPreview
                            slug={project.slug}
                            title={project.title}
                            creation_date={project.creation_date}
                            tags={project.tags}
                            image={project.image}
                            content={project.content}
                        />
                    </li>
                )
            })}
        </ul>)
    }
}


// allow for type checking on props
ProjectList.propTypes = {
    projects: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number,
        slug: React.PropTypes.string,
        title: React.PropTypes.string,
        creation_date: React.PropTypes.string,
        content: React.PropTypes.string,
        image: React.PropTypes.string,
        tags: React.PropTypes.arrayOf(React.PropTypes.shape({
            id: React.PropTypes.number,
            name: React.PropTypes.string,
            slug: React.PropTypes.string,
        })),
    })),
}


// export component
export default ProjectList


// end of file
