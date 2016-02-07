// third party imports
import test from 'tape'
// local imports
import nestPost from 'util/nestPost'


test('nestPost', assert => {
    const message = 'returns `undefined` when `post` is `undefined`'
        + ' and `tags` is object of tags'

    const post = void 0
    const tags = {
        0: {name: 'joice'},
        1: {name: 'monte'},
    }

    const actual = nestPost(post, tags)
    const expected = void 0

    assert.deepEqual(actual, expected, message)
    assert.end()
})


test('nestPost', assert => {
    const message = 'returns `undefined` when `post` is `undefined`'
        + ' and `tags` is `undefined`'

    const post = void 0
    const tags = void 0

    const actual = nestPost(post, tags)
    const expected = void 0

    assert.deepEqual(actual, expected, message)
    assert.end()
})


test('nestPost', assert => {
    const message = 'returns `post` when `post` is object'
        + ' and `tags` is `undefined`'

    const post = {
        title: 'about some stuff',
        otherProp: 234,
        tags: ['3', '5'],
    }
    const tags = void 0

    const actual = nestPost(post, tags)
    const expected = post

    assert.deepEqual(actual, expected, message)
    assert.end()
})


test('nestPost', assert => {
    const message = 'does not alter `post.tags` if it is not an array'

    const post = {
        someProps: 10,
        'some other prop': 'golden',
        tags: 'gondor',
    }
    const tags = {
        0: {name: 'john'},
        5: {name: 'moko'},
        'some crazy id02934': {name: 'gold', description: 'happy'},
    }
    const actual = nestPost(post, tags)
    const expected = post

    assert.deepEqual(actual, expected, message)
    assert.end()
})


test('nestPost', assert => {
    const message = 'nests tags by id into `post` when `post` is object'
        + ' and `tags` is object of tags'

    const post = {
        someProps: 10,
        'some other prop': 'golden',
        tags: ['some crazy id02934', '0'],
    }
    const tags = {
        0: {name: 'john'},
        5: {name: 'moko'},
        'some crazy id02934': {name: 'gold', description: 'happy'},
    }
    const actual = nestPost(post, tags)
    const expected = {
        someProps: 10,
        'some other prop': 'golden',
        tags: [{name: 'gold', description: 'happy'}, {name: 'john'}],
    }

    assert.deepEqual(actual, expected, message)
    assert.end()
})


test('nestPost', assert => {
    const message = 'maps unknown tag ids to `undefined`'

    const post = {
        someProps: 10,
        'some other prop': 'golden',
        tags: ['some crazy id02934', '0'],
    }
    const tags = {
        5: {name: 'moko'},
        'some crazy id02934': {name: 'gold', description: 'happy'},
    }
    const actual = nestPost(post, tags)
    const expected = {
        someProps: 10,
        'some other prop': 'golden',
        tags: [{name: 'gold', description: 'happy'}, void 0],
    }

    assert.deepEqual(actual, expected, message)
    assert.end()
})
