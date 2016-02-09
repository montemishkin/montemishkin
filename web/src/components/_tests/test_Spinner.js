// third party imports
import {assert} from 'chai'
import $ from 'teaspoon'
import React from 'react'
// local imports
import Spinner from 'components/Spinner'


describe('Spinner', function () {
    it('renders an <img>', function () {
        const $spinner = $(<Spinner />).render()

        const actual = $spinner.find('img').length
        const expected = 1

        assert.equal(actual, expected)
    })


    it('gives the <img> the ".spinner" class', function () {
        const $spinner = $(<Spinner />).render()

        const actual = $spinner.find('img').unwrap().className
        const expected = 'spinner'

        assert.equal(actual, expected)
    })


    it('gives the <img> a src attribute', function () {
        const $spinner = $(<Spinner />).render()

        assert.ok($spinner.find('img').unwrap().src)
    })


    it('spreads style prop onto the <img>', function () {
        const style = {backgroundColor: 'red'}
        const $spinner = $(<Spinner style={style} />).render()

        const actual = $spinner.find('img').unwrap().style.backgroundColor
        const expected = style.backgroundColor

        assert.equal(actual, expected)
    })


    it('does not let props overwrite src onto the <img>', function () {
        const props = {src: 'this-is-definitely not the img src attribute'}
        const $spinner = $(<Spinner {...props} />).render()

        const actual = $spinner.find('img').unwrap().src
        const notExpected = props.src

        assert.notEqual(actual, notExpected)
    })


    it('does not let props overwrite className onto the <img>', function () {
        const props = {className: 'this-is-definitely not the img class'}
        const $spinner = $(<Spinner {...props} />).render()

        const actual = $spinner.find('img').unwrap().className
        const notExpected = props.className

        assert.notEqual(actual, notExpected)
    })
})
