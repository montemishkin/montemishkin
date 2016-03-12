var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    debug: !isProduction,
    adminURL: isProduction
        ? 'admin.monte.mishkin.com'
        : 'localhost:8001',
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
