// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'
import List from 'components/List'


@radium
export default class TabContainer extends Component {
    static propTypes = {
        tabs: PropTypes.arrayOf(PropTypes.shape({
            // react component
            Title: PropTypes.func,
            // react component
            Content: PropTypes.func,
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

        const Content = tabs[activeIndex].Content

        return (
            <div {...unusedProps}>
                <List style={styles.tabList} listItemStyle={styles.tabListItem}>
                    {tabs.map(({Title}, index) => {
                        // default to regular styling
                        let tabTitleStyle = styles.tabTitle
                        // if this is the active tab
                        if (index === activeIndex) {
                            // use active tab styling
                            tabTitleStyle = styles.tabTitleActive
                        }

                        return (
                            <Title
                                style={tabTitleStyle}
                                key={index}
                                onClick={() => this.setState({activeIndex: index})}
                            />
                        )
                    })}
                </List>
                <Content />
            </div>
        )
    }
}
