const parse = require('parse-link-header')

const parseHeader = (link) => {
    return parse(link)
}

module.exports = {
    parseHeader
}