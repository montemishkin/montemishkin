// third party imports
import chai from 'chai'
const {assert} = chai
import $ from 'teaspoon'
import React from 'react'
// local imports
import FormattedDate from 'components/FormattedDate'


describe('FormattedDate', function () {
    it('renders an empty <div> when not given any props', function () {
        const $d = $(<FormattedDate />).render()

        const actual = $d.find('div').length
        const expected = 1

        assert.equal(actual, expected)

        const actual2 = $d.find('div').children().length
        const expected2 = 0

        assert.equal(actual2, expected2)
    })


    it('spreads style prop onto the <div>', function () {
        const style = {backgroundColor: 'red'}
        const $d = $(<FormattedDate style={style} />).render()

        const actual = $d.find('div').unwrap().style.backgroundColor
        const expected = style.backgroundColor

        assert.equal(actual, expected)
    })


    it('renders a <time> when given `day`, `month`, and `year`', function () {
        const props = {
            day: 12,
            month: 12,
            year: 2012,
        }
        const $d = $(<FormattedDate {...props} />).render()

        const actual = $d.find('time').length
        const expected = 1

        assert.equal(actual, expected)
    })


    it('spreads style prop onto the <time>', function () {
        const props = {
            day: 12,
            month: 12,
            year: 2012,
            style: {backgroundColor: 'red'},
        }
        const $d = $(<FormattedDate {...props} />).render()

        const actual = $d.find('time').unwrap().style.backgroundColor
        const expected = props.style.backgroundColor

        assert.equal(actual, expected)
    })


    it('properly formats a human readable date string', function () {
        const props = {
            day: 12,
            month: 12,
            year: 2012,
        }
        const $d = $(<FormattedDate {...props} />).render()

        const actual = $d.find('time').text()
        const expected = 'Dec 12, 2012'

        assert.equal(actual, expected)
    })
})
