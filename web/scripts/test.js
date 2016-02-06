var testsContext = require.context(
    // start out in src dir
    '../src',
    // recurse into subdirs
    true,
    // collect all modules matching this regex
    /_tests\/test_[^\/]+\.js$/
)

// require all collected modules
testsContext.keys().forEach(testsContext)
