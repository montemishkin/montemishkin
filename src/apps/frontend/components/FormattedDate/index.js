// third party imports
import React from 'react'
import radium from 'radium'
/* misc third party imports */
import {trimLeft} from 'lodash'
// local imports
import styles from './styles'


// full names of calendar months
const month_names = [
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
const short_month_names = month_names.map(name => name.substr(0, 3))


/**
 * Responsible for proper formatting of dates.
 * @class
 */
@radium
class FormattedDate extends React.Component {
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
            .map(number_string => trimLeft(number_string, '0'))

        return `${short_month_names[parts[1] - 1]} ${parts[2]}, ${parts[0]}`
    }


    render() {
        return (<div style={styles.container}>
            {this.getPrettyDateString()}
        </div>)
    }
}


// allow for type checking of props
FormattedDate.propTypes = {
    date: React.PropTypes.string,
}


// export component
export default FormattedDate


// end of file
