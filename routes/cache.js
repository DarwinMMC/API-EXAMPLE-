const ExpeditiousCache = require('express-expeditious')

const defaultOptions = {
    namespace:'cache',
    defaultTtl:'10 second',
    statusCodeEXpires:{
        404:'5 second',
        500:0
    }
}

const cacheInit = ExpeditiousCache(defaultOptions)

module.exports = cacheInit