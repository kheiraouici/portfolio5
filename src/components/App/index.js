if (typeof process != 'undefined' && !process.browser) {
    // node context
    module.exports = require('App');
} else {
    // browser context
    module.exports = require('App/dist/client/client');
}