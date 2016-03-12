var isProduction = process.env.NODE_ENV === 'production'

var adminURL = isProduction
    ? 'admin.monte.mishkin.com'
    // TODO: ideally the port number would not be hardcoded here
    : 'localhost:8001'

module.exports = {
    debug: !isProduction,
    adminURL: adminURL,
    apiURL: 'http://' + adminURL + '/query/',
    hostURL: isProduction
        ? 'http://monte.mishkin.com'
        // TODO: ideally the port number would not be hardcoded here
        : 'localhost:8000',
    disqusShortName: isProduction
        ? 'montemishkin'
        : 'montemishkin-test',
    expressLogStyle: isProduction
        ? 'combined'
        : 'dev',
    gaPropertyId: isProduction
        ? 'UA-68929870-2'
        : '',
}
