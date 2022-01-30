const monk = require('monk')
module.exports = monk('mongo:27017/db',{
    user: 'root',
    password: process.env.DB_PASSWORD,
    authSource: 'admin'
})