// third party imports
import test from 'tape'


test('mything', assert => {
    assert.pass(3, 3, 'three should equal three')

    assert.end()
})


test('othter thing', assert => {
    assert.equal(5, 4, 'five should equal four')

    assert.end()
})
