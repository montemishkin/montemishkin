// third party imports
import React, {PropTypes} from 'react'
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


function FormattedDate({day, month, year, ...unusedProps}) {
    const shouldRenderBlank = typeof day === 'undefined'
        || typeof month === 'undefined'
        || typeof year === 'undefined'

    if (shouldRenderBlank) {
        return <div {...unusedProps} />
    }

    return (
        <time {...unusedProps}>
            {`${shortMonthNames[month - 1]} ${day}, ${year}`}
        </time>
    )
}


FormattedDate.propTypes = {
    day: PropTypes.number,
    month: PropTypes.number,
    year: PropTypes.number,
}


export default radium(FormattedDate)
