// third party imports
import chai from 'chai'
const {assert} = chai
import $ from 'teaspoon'
import React from 'react'
// local imports
import MarkdownContainer from 'components/MarkdownContainer'


describe('MarkdownContainer', function () {
    it('renders a <section>', function () {
        const $md = $(<MarkdownContainer />).render()

        const actual = $md.find('section').length
        const expected = 1

        assert.equal(actual, expected)
    })


    it('gives the <section> the ".markdown" class by default', function () {
        const $md = $(<MarkdownContainer />).render()

        const actual = $md.find('section').unwrap().className
        const expected = 'markdown'

        assert.equal(actual, expected)
    })


    it('accepts a `className` prop to specify the <section> class name', function () {
        const className = 'joe'
        const $md = $(<MarkdownContainer className={className} />).render()

        const actual = $md.find('section').unwrap().className
        const expected = className

        assert.equal(actual, expected)
    })


    it('spreads style prop onto the <section>', function () {
        const style = {backgroundColor: 'red'}
        const $md = $(<MarkdownContainer style={style} />).render()

        const actual = $md.find('section').unwrap().style.backgroundColor
        const expected = style.backgroundColor

        assert.equal(actual, expected)
    })


    it('dangerously sets the <section> inner html', function () {
        const html = '<p>this is <strong>definitely</strong> html</p>'
        const $md = $(
            <MarkdownContainer>
                {html}
            </MarkdownContainer>
        ).render()

        const actual = $md.find('p > strong').length
        const expected = 1

        assert.equal(actual, expected)
    })
})
