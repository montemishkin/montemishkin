// third party imports
import React, {Component, PropTypes} from 'react'
import radium from 'radium'


// full names of calendar months
const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]
// shortened names of calendar months
const shortMonthNames = monthNames.map(name => name.substr(0, 3))


/**
 * Responsible for proper formatting of dates.
 */
@radium
export default class FormattedDate extends Component {
    static propTypes = {
        day: PropTypes.number.isRequired,
        month: PropTypes.number.isRequired,
        year: PropTypes.number.isRequired,
    }


    /**
     * Returns a date string like "Aug 3, 2015".
     */
    get prettyDateString() {
        const {day, month, year} = this.props

        return `${shortMonthNames[month - 1]} ${day}, ${year}`
    }


    render() {
        return (
            <time {...this.props}>
                {this.prettyDateString}
            </time>
        )
    }
}
