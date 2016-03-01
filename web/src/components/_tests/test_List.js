// third party imports
import chai from 'chai'
const {assert} = chai
import $ from 'teaspoon'
import React from 'react'
// local imports
import List from 'components/List'


describe('List', function () {
    it('renders an empty <ul> when not given any props', function () {
        const $l = $(<List />).render()

        const actual = $l.find('ul').length
        const expected = 1

        assert.equal(actual, expected)

        const actual2 = $l.find('ul').children().length
        const expected2 = 0

        assert.equal(actual2, expected2)
    })


    it('wraps child strings in <li>s', function () {
        const $l = $(
            <List>
                {[
                    'one',
                    'the second',
                    'tree!',
                ]}
            </List>
        ).render()

        const actual = $l.find('ul > li').length
        const expected = 3

        assert.equal(actual, expected)
    })


    it('does not dangerously set innerHTML of <li>s when given child strings', function () {
        const $l = $(
            <List>
                {[
                    '<strong>one</strong>',
                ]}
            </List>
        ).render()

        const actual = $l.find('ul > li > strong').length
        const expected = 0

        assert.equal(actual, expected)
    })


    it('wraps child markup in <li>s', function () {
        const SomeComponent = ({text}) => <strong>{text}</strong>
        const $l = $(
            <List>
                {['one', 'the second', 'tree!'].map(
                    (text, key) => <SomeComponent text={text} key={key} />
                )}
            </List>
        ).render()

        const actual = $l.find($.s`ul > li > ${SomeComponent} > strong`).length
        const expected = 3

        assert.equal(actual, expected)
    })


    it('spreads `style` prop onto the <ul>', function () {
        const style = {backgroundColor: 'red'}
        const $l = $(<List style={style} />).render()

        const actual = $l.find('ul').unwrap().style.backgroundColor
        const expected = style.backgroundColor

        assert.equal(actual, expected)
    })


    it('applies `listItemStyle` prop onto the <li>s', function () {
        const style = {backgroundColor: 'red'}
        const $l = $(
            <List listItemStyle={style}>
                {[
                    'one',
                    'the second',
                    'tree!',
                ]}
            </List>
        ).render()

        const expected = style.backgroundColor

        $l.find('ul > li').each(node => {
            const actual = node.style.backgroundColor
            assert.equal(actual, expected)
        })
    })


    it('applies `listItemStyle` and `firstListItemStyle` prop onto first <li>', function () {
        const listItemStyle = {backgroundColor: 'red'}
        const firstListItemStyle = {color: 'blue'}
        const $l = $(
            <List
                listItemStyle={listItemStyle}
                firstListItemStyle={firstListItemStyle}
            >
                {[
                    'one',
                    'the second',
                    'tree!',
                ]}
            </List>
        ).render()

        const firstLiNode = $l.first('ul > li').unwrap()

        const actual = firstLiNode.style.backgroundColor
        const expected = listItemStyle.backgroundColor

        assert.equal(actual, expected)

        const actual2 = firstLiNode.style.color
        const expected2 = firstListItemStyle.color

        assert.equal(actual2, expected2)
    })


    it('applies `firstListItemStyle` prop onto only first <li>', function () {
        const listItemStyle = {backgroundColor: 'red'}
        const firstListItemStyle = {color: 'blue'}
        const $l = $(
            <List
                listItemStyle={listItemStyle}
                firstListItemStyle={firstListItemStyle}
            >
                {[
                    'one',
                    'the second',
                    'tree!',
                ]}
            </List>
        ).render()

        const notExpected = firstListItemStyle.color

        $l.find('ul > li').toArray().slice(1).forEach(node => {
            const actual = node.style.color

            assert.notEqual(actual, notExpected)
        })
    })


    it('applies `firstListItemStyle` over `listItemStyle` for first <li>', function () {
        const listItemStyle = {backgroundColor: 'red'}
        const firstListItemStyle = {backgroundColor: 'blue'}
        const $l = $(
            <List
                listItemStyle={listItemStyle}
                firstListItemStyle={firstListItemStyle}
            >
                {[
                    'one',
                    'the second',
                    'tree!',
                ]}
            </List>
        ).render()

        const firstLiNode = $l.first('ul > li').unwrap()

        const actual = firstLiNode.style.backgroundColor
        const expected = firstListItemStyle.backgroundColor

        assert.equal(actual, expected)
    })


    it('applies `listItemStyle` and `lastListItemStyle` prop onto last <li>', function () {
        const listItemStyle = {backgroundColor: 'red'}
        const lastListItemStyle = {color: 'blue'}
        const $l = $(
            <List
                listItemStyle={listItemStyle}
                lastListItemStyle={lastListItemStyle}
            >
                {[
                    'one',
                    'the second',
                    'tree!',
                ]}
            </List>
        ).render()

        const lastLiNode = $l.last('ul > li').unwrap()

        const actual = lastLiNode.style.backgroundColor
        const expected = listItemStyle.backgroundColor

        assert.equal(actual, expected)

        const actual2 = lastLiNode.style.color
        const expected2 = lastListItemStyle.color

        assert.equal(actual2, expected2)
    })


    it('applies `lastListItemStyle` prop onto only last <li>', function () {
        const listItemStyle = {backgroundColor: 'red'}
        const lastListItemStyle = {color: 'blue'}
        const $l = $(
            <List
                listItemStyle={listItemStyle}
                lastListItemStyle={lastListItemStyle}
            >
                {[
                    'one',
                    'the second',
                    'tree!',
                ]}
            </List>
        ).render()

        const notExpected = lastListItemStyle.color

        $l.find('ul > li').toArray().slice(0, -1).forEach(node => {
            const actual = node.style.color

            assert.notEqual(actual, notExpected)
        })
    })


    it('applies `lastListItemStyle` over `listItemStyle` for last <li>', function () {
        const listItemStyle = {backgroundColor: 'red'}
        const lastListItemStyle = {backgroundColor: 'blue'}
        const $l = $(
            <List
                listItemStyle={listItemStyle}
                lastListItemStyle={lastListItemStyle}
            >
                {[
                    'one',
                    'the second',
                    'tree!',
                ]}
            </List>
        ).render()

        const lastLiNode = $l.last('ul > li').unwrap()

        const actual = lastLiNode.style.backgroundColor
        const expected = lastListItemStyle.backgroundColor

        assert.equal(actual, expected)
    })
})
