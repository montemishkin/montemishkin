// third party imports
import React from 'react'
import radium from 'radium'
import {trimLeft} from 'lodash'


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
export default class FormattedDate extends React.Component {
    static propTypes = {
        date: React.PropTypes.string,
    }


    /**
     * Returns a date string like "Aug 3, 2015" based on `this.props.date`.
     * Expects `this.props.date` to be like "2015-09-07T00:00:36.049780Z".
     */
    getPrettyDateString() {
        // e.g. ['2015', '8', '22']
        const parts = this.props.date
            // grab just the date part (not the time part)
            .substr(0, this.props.date.indexOf('T'))
            // split into array of parts
            .split('-')
            // strip leading zeroes
            .map(numberString => trimLeft(numberString, '0'))

        return `${shortMonthNames[parts[1] - 1]} ${parts[2]}, ${parts[0]}`
    }


    render() {
        // TODO: use a <time> tag here
        // see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time

        return (<span>
            {this.getPrettyDateString()}
        </span>)
    }
}


// end of file
