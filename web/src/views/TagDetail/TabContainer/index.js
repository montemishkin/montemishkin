// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import List from 'components/List'


@radium
export default class TabsContainer extends Component {
    static propTypes = {
        tabs: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            content: PropTypes.node,
        })).isRequired,
        initialActiveIndex: PropTypes.number,
        style: PropTypes.object,
    }


    static defaultProps = {
        initialActiveIndex: 0,
    }


    constructor(...args) {
        // instantiate `this`
        super(...args)
        // set initial state
        this.state = {
            // index of the active tab within the tabs list
            activeIndex: this.props.initialActiveIndex,
        }
    }


    render() {
        const {
            state: {activeIndex},
            props: {tabs, ...unusedProps},
        } = this

        return (
            <div {...unusedProps}>
                <List style={styles.tabList} listItemStyle={styles.tabListItem}>
                    {tabs.map(({title}, index) => {
                        // default to regular styling
                        let tabTitleStyle = styles.tabTitle
                        // if this is the active tab
                        if (index === activeIndex) {
                            // use active tab styling
                            tabTitleStyle = styles.tabTitleActive
                        }

                        return (
                            <div
                                style={tabTitleStyle}
                                key={index}
                                onClick={() => this.setState({activeIndex: index})}
                            >
                                {title}
                            </div>
                        )
                    })}
                </List>
                <div>
                    {tabs[activeIndex].content}
                </div>
            </div>
        )
    }
}
