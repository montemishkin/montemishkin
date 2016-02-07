// third party imports
import {assert} from 'chai'
import $ from 'teaspoon'
import React from 'react'
// local imports
import Spinner from 'components/Spinner'


describe('Spinner', function () {
    it('renders an img element', function () {
        const $spinner = $(<Spinner />).render()

        const actual = $spinner.find('img').length
        const expected = 1

        assert.equal(actual, expected)
    })


    it('gives the img element the ".spinner" class', function () {
        const $spinner = $(<Spinner />).render()

        const actual = $spinner.find('img')[0].className
        const expected = 'spinner'

        assert.equal(actual, expected)
    })


    it('gives the img element a src attribute', function () {
        const $spinner = $(<Spinner />).render()

        assert.ok($spinner.find('img')[0].src)
    })


    it('spreads style prop onto img', function () {
        const style = {backgroundColor: 'red'}
        const $spinner = $(<Spinner style={style} />).render()

        const actual = $spinner.find('img')[0].style.backgroundColor
        const expected = 'red'

        assert.deepEqual(actual, expected)
    })


    it('does not let props overwrite src onto img', function () {
        const props = {src: 'this-is-definitely not the img src attribute'}
        const $spinner = $(<Spinner {...props} />).render()

        const actual = $spinner.find('img')[0].src
        const notExpected = 'this-is-definitely not the img src attribute'

        assert.notEqual(actual, notExpected)
    })


    it('does not let props overwrite className onto img', function () {
        const props = {className: 'this-is-definitely not the img class'}
        const $spinner = $(<Spinner {...props} />).render()

        const actual = $spinner.find('img')[0].className
        const notExpected = 'this-is-definitely not the img class'

        assert.notEqual(actual, notExpected)
    })
})
