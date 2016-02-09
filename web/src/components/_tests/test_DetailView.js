// third party imports
import {assert} from 'chai'
import $ from 'teaspoon'
import React from 'react'
// local imports
import DetailView from 'components/DetailView'


describe('DetailView', function () {
    it('renders `FoundComponent` when test is true', function () {
        const Found = () => <span>globo dobo</span>
        const NotFound = () => <span>not even founded</span>
        const test = () => true

        const $d = $(
            <DetailView
                FoundComponent={Found}
                NotFoundComponent={NotFound}
                test={test}
            />
        ).render()

        const actual = $d.find('span:textContent(globo dobo)').length
        const expected = 1

        assert.equal(actual, expected)
    })


    it('does not render `NotFoundComponent` when test is true', function () {
        const Found = () => <span>globo dobo</span>
        const NotFound = () => <span>not even founded</span>
        const test = () => true

        const $d = $(
            <DetailView
                FoundComponent={Found}
                NotFoundComponent={NotFound}
                test={test}
            />
        ).render()

        const actual = $d.find('span:textContent(not even founded)').length
        const expected = 0

        assert.equal(actual, expected)
    })


    it('renders `NotFoundComponent` when test is false', function () {
        const Found = () => <span>globo dobo</span>
        const NotFound = () => <span>not even founded</span>
        const test = () => false

        const $d = $(
            <DetailView
                FoundComponent={Found}
                NotFoundComponent={NotFound}
                test={test}
            />
        ).render()

        const actual = $d.find('span:textContent(not even founded)').length
        const expected = 1

        assert.equal(actual, expected)
    })


    it('does not render `FoundComponent` when test is false', function () {
        const Found = () => <span>globo dobo</span>
        const NotFound = () => <span>not even founded</span>
        const test = () => false

        const $d = $(
            <DetailView
                FoundComponent={Found}
                NotFoundComponent={NotFound}
                test={test}
            />
        ).render()

        const actual = $d.find('span:textContent(globo dobo)').length
        const expected = 0

        assert.equal(actual, expected)
    })


    it('passes `item` prop to `FoundComponent` when test is true', function () {
        const Found = ({item}) => <span>{item.definitely}</span>
        const NotFound = () => <span>not even founded</span>
        const test = () => true
        const item = {definitely: 'is the item'}

        const $d = $(
            <DetailView
                FoundComponent={Found}
                NotFoundComponent={NotFound}
                test={test}
                item={item}
            />
        ).render()

        const actual = $d.find('span:textContent(is the item)').length
        const expected = 1

        assert.equal(actual, expected)
    })


    it('passes `item` prop to `NotFoundComponent` when test is false', function () {
        const Found = () => <span>globo dobo</span>
        const NotFound = ({item}) => <span>{item.definitely}</span>
        const test = () => false
        const item = {definitely: 'is the item'}

        const $d = $(
            <DetailView
                FoundComponent={Found}
                NotFoundComponent={NotFound}
                test={test}
                item={item}
            />
        ).render()

        const actual = $d.find('span:textContent(is the item)').length
        const expected = 1

        assert.equal(actual, expected)
    })


    it('passes `style` prop to `FoundComponent` when test is true', function () {
        const Found = props => <span {...props}>globo dobo</span>
        const NotFound = props => <span {...props}>not even founded</span>
        const test = () => true
        const style = {backgroundColor: 'red'}

        const $d = $(
            <DetailView
                FoundComponent={Found}
                NotFoundComponent={NotFound}
                test={test}
                style={style}
            />
        ).render()

        const node = $d.find('span:textContent(globo dobo)')[0]

        const actual = node.style.backgroundColor
        const expected = style.backgroundColor

        assert.equal(actual, expected)
    })


    it('passes `style` prop to `NotFoundComponent` when test is false', function () {
        const Found = props => <span {...props}>globo dobo</span>
        const NotFound = props => <span {...props}>not even founded</span>
        const test = () => false
        const style = {backgroundColor: 'red'}

        const $d = $(
            <DetailView
                FoundComponent={Found}
                NotFoundComponent={NotFound}
                test={test}
                style={style}
            />
        ).render()

        const node = $d.find('span:textContent(not even founded)')[0]

        const actual = node.style.backgroundColor
        const expected = style.backgroundColor

        assert.equal(actual, expected)
    })


    it('tries to fetch when mounted if told to do so', function () {
        let didTryFetch = false
        const tryFetch = () => didTryFetch = true

        const $d = $(
            <DetailView
                tryFetch={tryFetch}
                shouldTryFetch={true}
            />
        ).render()

        assert.isTrue(didTryFetch)
    })


    it('does not try to fetch when mounted if not told to do so', function () {
        let didTryFetch = false
        const tryFetch = () => didTryFetch = true

        const $d = $(
            <DetailView
                tryFetch={tryFetch}
                shouldTryFetch={false}
            />
        ).render()

        assert.isFalse(didTryFetch)
    })


    it('tries to fetch when receiving props if told to do so', function () {
        let didTryFetch = false
        const tryFetch = () => didTryFetch = true

        const $d = $(
            <DetailView />
        ).render()

        assert.isFalse(didTryFetch)

        $d.props({tryFetch, shouldTryFetch: true})

        assert.isTrue(didTryFetch)
    })


    it('does not try to fetch when receiving props if not told to do so', function () {
        let didTryFetch = false
        const tryFetch = () => didTryFetch = true

        const $d = $(
            <DetailView />
        ).render()

        assert.isFalse(didTryFetch)

        $d.props({tryFetch, shouldTryFetch: false})

        assert.isFalse(didTryFetch)
    })
})
