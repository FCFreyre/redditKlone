const config = require('../knexfile')

const env = 'development'
const connection = config[env]

const pg = require('knex')(connection)

module.exports = pg
