// third party imports
import React, {Component, PropTypes} from 'react'
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
export default class FormattedDate extends Component {
    static propTypes = {
        date: PropTypes.string.isRequired,
    }


    /**
     * Returns a date string like "Aug 3, 2015" based on `this.props.date`.
     * Expects `this.props.date` to be like "2015-09-07T00:00:36.049780Z".
     */
    get prettyDateString() {
        const {date} = this.props
        // e.g. ['2015', '8', '22']
        const parts = date
            // grab just the date part (not the time part)
            .substr(0, date.indexOf('T'))
            // split into array of parts
            .split('-')
            // strip leading zeroes
            .map(numberString => trimLeft(numberString, '0'))

        return `${shortMonthNames[parts[1] - 1]} ${parts[2]}, ${parts[0]}`
    }


    render() {
        const {
            prettyDateString,
            props: {
                date, // eslint-disable-line no-unused-vars
                ...unusedProps,
            },
        } = this

        // TODO: use a <time> tag here
        // see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
        return (
            <span {...unusedProps}>
                {prettyDateString}
            </span>
        )
    }
}
