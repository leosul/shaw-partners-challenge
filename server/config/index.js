const env = process.env.NODE_ENV || 'dev'

let config

switch (env) {
  case 'production':
  case 'staging':
  case 'dev':
    config = require(`./${env}`)
    break

  default:
    throw new Error(`Invalid NODE_ENV value: ${env}`)
}

const c = Object.assign({}, config)

module.exports = c
