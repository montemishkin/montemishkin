// third party imports
import chai from 'chai'
const {assert} = chai
import $ from 'teaspoon'
import React from 'react'
// local imports
import Loader from 'components/Loader'


describe('Loader', function () {
    it('renders `LoadingContent` when `isLoading` true, `error` falsey, `isInvalid` false', function () {
        const LoadingContent = () => <span>not ready ok?</span>
        const LoadedContent = () => <span>loaded af</span>
        const ErrorContent = () => <span>really bad error</span>

        const $l = $(
            <Loader
                LoadingContent={LoadingContent}
                LoadedContent={LoadedContent}
                ErrorContent={ErrorContent}
                isLoading={true}
                isInvalid={false}
            />
        ).render()

        const actual = $l.find('span:textContent(not ready ok?)').length
        const expected = 1

        assert.equal(actual, expected)

        const actual2 = $l.find('span:textContent(loaded af)').length
        const expected2 = 0

        assert.equal(actual2, expected2)

        const actual3 = $l.find('span:textContent(really bad error)').length
        const expected3 = 0

        assert.equal(actual3, expected3)
    })


    it('renders `LoadingContent` when `isLoading` true, `error` falsey, `isInvalid` true', function () {
        const LoadingContent = () => <span>not ready ok?</span>
        const LoadedContent = () => <span>loaded af</span>
        const ErrorContent = () => <span>really bad error</span>

        const $l = $(
            <Loader
                LoadingContent={LoadingContent}
                LoadedContent={LoadedContent}
                ErrorContent={ErrorContent}
                isLoading={true}
                isInvalid={true}
            />
        ).render()

        const actual = $l.find('span:textContent(not ready ok?)').length
        const expected = 1

        assert.equal(actual, expected)

        const actual2 = $l.find('span:textContent(loaded af)').length
        const expected2 = 0

        assert.equal(actual2, expected2)

        const actual3 = $l.find('span:textContent(really bad error)').length
        const expected3 = 0

        assert.equal(actual3, expected3)
    })


    it('renders `LoadingContent` when `isLoading` true, `error` truthy, `isInvalid` false', function () {
        const LoadingContent = () => <span>not ready ok?</span>
        const LoadedContent = () => <span>loaded af</span>
        const ErrorContent = () => <span>really bad error</span>
        const error = {message: 'something must have happened'}

        const $l = $(
            <Loader
                LoadingContent={LoadingContent}
                LoadedContent={LoadedContent}
                ErrorContent={ErrorContent}
                isLoading={true}
                isInvalid={false}
                error={error}
            />
        ).render()

        const actual = $l.find('span:textContent(not ready ok?)').length
        const expected = 1

        assert.equal(actual, expected)

        const actual2 = $l.find('span:textContent(loaded af)').length
        const expected2 = 0

        assert.equal(actual2, expected2)

        const actual3 = $l.find('span:textContent(really bad error)').length
        const expected3 = 0

        assert.equal(actual3, expected3)
    })


    it('renders `LoadingContent` when `isLoading` true, `error` truthy, `isInvalid` true', function () {
        const LoadingContent = () => <span>not ready ok?</span>
        const LoadedContent = () => <span>loaded af</span>
        const ErrorContent = () => <span>really bad error</span>
        const error = {message: 'something must have happened'}

        const $l = $(
            <Loader
                LoadingContent={LoadingContent}
                LoadedContent={LoadedContent}
                ErrorContent={ErrorContent}
                isLoading={true}
                isInvalid={true}
                error={error}
            />
        ).render()

        const actual = $l.find('span:textContent(not ready ok?)').length
        const expected = 1

        assert.equal(actual, expected)

        const actual2 = $l.find('span:textContent(loaded af)').length
        const expected2 = 0

        assert.equal(actual2, expected2)

        const actual3 = $l.find('span:textContent(really bad error)').length
        const expected3 = 0

        assert.equal(actual3, expected3)
    })


    it('renders `ErrorContent` when `isLoading` false, `error` truthy, `isInvalid` false', function () {
        const LoadingContent = () => <span>not ready ok?</span>
        const LoadedContent = () => <span>loaded af</span>
        const ErrorContent = () => <span>really bad error</span>
        const error = {message: 'something must have happened'}

        const $l = $(
            <Loader
                LoadingContent={LoadingContent}
                LoadedContent={LoadedContent}
                ErrorContent={ErrorContent}
                isLoading={false}
                isInvalid={false}
                error={error}
            />
        ).render()

        const actual = $l.find('span:textContent(not ready ok?)').length
        const expected = 0

        assert.equal(actual, expected)

        const actual2 = $l.find('span:textContent(loaded af)').length
        const expected2 = 0

        assert.equal(actual2, expected2)

        const actual3 = $l.find('span:textContent(really bad error)').length
        const expected3 = 1

        assert.equal(actual3, expected3)
    })


    it('renders `ErrorContent` when `isLoading` false, `error` truthy, `isInvalid` true', function () {
        const LoadingContent = () => <span>not ready ok?</span>
        const LoadedContent = () => <span>loaded af</span>
        const ErrorContent = () => <span>really bad error</span>
        const error = {message: 'something must have happened'}

        const $l = $(
            <Loader
                LoadingContent={LoadingContent}
                LoadedContent={LoadedContent}
                ErrorContent={ErrorContent}
                isLoading={false}
                isInvalid={true}
                error={error}
            />
        ).render()

        const actual = $l.find('span:textContent(not ready ok?)').length
        const expected = 0

        assert.equal(actual, expected)

        const actual2 = $l.find('span:textContent(loaded af)').length
        const expected2 = 0

        assert.equal(actual2, expected2)

        const actual3 = $l.find('span:textContent(really bad error)').length
        const expected3 = 1

        assert.equal(actual3, expected3)
    })


    it('renders `LoadedContent` when `isLoading` false, `error` falsey, `isInvalid` false', function () {
        const LoadingContent = () => <span>not ready ok?</span>
        const LoadedContent = () => <span>loaded af</span>
        const ErrorContent = () => <span>really bad error</span>

        const $l = $(
            <Loader
                LoadingContent={LoadingContent}
                LoadedContent={LoadedContent}
                ErrorContent={ErrorContent}
                isLoading={false}
                isInvalid={false}
            />
        ).render()

        const actual = $l.find('span:textContent(not ready ok?)').length
        const expected = 0

        assert.equal(actual, expected)

        const actual2 = $l.find('span:textContent(loaded af)').length
        const expected2 = 1

        assert.equal(actual2, expected2)

        const actual3 = $l.find('span:textContent(really bad error)').length
        const expected3 = 0

        assert.equal(actual3, expected3)
    })


    it('renders `LoadedContent` when `isLoading` false, `error` falsey, `isInvalid` true', function () {
        const LoadingContent = () => <span>not ready ok?</span>
        const LoadedContent = () => <span>loaded af</span>
        const ErrorContent = () => <span>really bad error</span>

        const $l = $(
            <Loader
                LoadingContent={LoadingContent}
                LoadedContent={LoadedContent}
                ErrorContent={ErrorContent}
                isLoading={false}
                isInvalid={true}
            />
        ).render()

        const actual = $l.find('span:textContent(not ready ok?)').length
        const expected = 0

        assert.equal(actual, expected)

        const actual2 = $l.find('span:textContent(loaded af)').length
        const expected2 = 1

        assert.equal(actual2, expected2)

        const actual3 = $l.find('span:textContent(really bad error)').length
        const expected3 = 0

        assert.equal(actual3, expected3)
    })


    it('passes `style` prop to `LoadingContent`', function () {
        const LoadingContent = props => <span {...props}>not ready ok?</span>
        const LoadedContent = props => <span {...props}>loaded af</span>
        const ErrorContent = props => <span {...props}>really bad error</span>
        const style = {backgroundColor: 'red'}

        const $l = $(
            <Loader
                LoadingContent={LoadingContent}
                LoadedContent={LoadedContent}
                ErrorContent={ErrorContent}
                isLoading={true}
                style={style}
            />
        ).render()

        const node = $l.find('span:textContent(not ready ok?)').unwrap()

        const actual = node.style.backgroundColor
        const expected = style.backgroundColor

        assert.equal(actual, expected)
    })


    it('passes `style` prop to `ErrorContent`', function () {
        const LoadingContent = props => <span {...props}>not ready ok?</span>
        const LoadedContent = props => <span {...props}>loaded af</span>
        const ErrorContent = props => <span {...props}>really bad error</span>
        const error = {message: 'oops'}
        const style = {backgroundColor: 'red'}

        const $l = $(
            <Loader
                LoadingContent={LoadingContent}
                LoadedContent={LoadedContent}
                ErrorContent={ErrorContent}
                isLoading={false}
                error={error}
                style={style}
            />
        ).render()

        const node = $l.find('span:textContent(really bad error)').unwrap()

        const actual = node.style.backgroundColor
        const expected = style.backgroundColor

        assert.equal(actual, expected)
    })


    it('passes `style` prop to `LoadedContent`', function () {
        const LoadingContent = props => <span {...props}>not ready ok?</span>
        const LoadedContent = props => <span {...props}>loaded af</span>
        const ErrorContent = props => <span {...props}>really bad error</span>
        const style = {backgroundColor: 'red'}

        const $l = $(
            <Loader
                LoadingContent={LoadingContent}
                LoadedContent={LoadedContent}
                ErrorContent={ErrorContent}
                isLoading={false}
                style={style}
            />
        ).render()

        const node = $l.find('span:textContent(loaded af)').unwrap()

        const actual = node.style.backgroundColor
        const expected = style.backgroundColor

        assert.equal(actual, expected)
    })



    // it('passes `item` prop to `FoundComponent` when test is true', function () {
    //     const Found = ({item}) => <span>{item.definitely}</span>
    //     const NotFound = () => <span>not even founded</span>
    //     const test = () => true
    //     const item = {definitely: 'is the item'}
    //
    //     const $l = $(
    //         <DetailView
    //             FoundComponent={Found}
    //             NotFoundComponent={NotFound}
    //             test={test}
    //             item={item}
    //         />
    //     ).render()
    //
    //     const actual = $l.find('span:textContent(is the item)').length
    //     const expected = 1
    //
    //     assert.equal(actual, expected)
    // })
    //
    //
    // it('passes `item` prop to `NotFoundComponent` when test is false', function () {
    //     const Found = () => <span>globo dobo</span>
    //     const NotFound = ({item}) => <span>{item.definitely}</span>
    //     const test = () => false
    //     const item = {definitely: 'is the item'}
    //
    //     const $l = $(
    //         <DetailView
    //             FoundComponent={Found}
    //             NotFoundComponent={NotFound}
    //             test={test}
    //             item={item}
    //         />
    //     ).render()
    //
    //     const actual = $l.find('span:textContent(is the item)').length
    //     const expected = 1
    //
    //     assert.equal(actual, expected)
    // })


    // it('tries to fetch when mounted if told to do so', function () {
    //     let didTryFetch = false
    //     const tryFetch = () => didTryFetch = true
    //
    //     const $l = $(
    //         <DetailView
    //             tryFetch={tryFetch}
    //             shouldTryFetch={true}
    //         />
    //     ).render()
    //
    //     assert.isTrue(didTryFetch)
    // })
    //
    //
    // it('does not try to fetch when mounted if not told to do so', function () {
    //     let didTryFetch = false
    //     const tryFetch = () => didTryFetch = true
    //
    //     const $l = $(
    //         <DetailView
    //             tryFetch={tryFetch}
    //             shouldTryFetch={false}
    //         />
    //     ).render()
    //
    //     assert.isFalse(didTryFetch)
    // })
    //
    //
    // it('tries to fetch when receiving props if told to do so', function () {
    //     let didTryFetch = false
    //     const tryFetch = () => didTryFetch = true
    //
    //     const $l = $(
    //         <DetailView />
    //     ).render()
    //
    //     assert.isFalse(didTryFetch)
    //
    //     $l.props({tryFetch, shouldTryFetch: true})
    //
    //     assert.isTrue(didTryFetch)
    // })
    //
    //
    // it('does not try to fetch when receiving props if not told to do so', function () {
    //     let didTryFetch = false
    //     const tryFetch = () => didTryFetch = true
    //
    //     const $l = $(
    //         <DetailView />
    //     ).render()
    //
    //     assert.isFalse(didTryFetch)
    //
    //     $l.props({tryFetch, shouldTryFetch: false})
    //
    //     assert.isFalse(didTryFetch)
    // })
})
