var mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: '127.0.0.1',
    user:'root',
    password: 'Raymond3991@',
    connectionLimit: 5,
    database:'20190104_process_master'
});

pool.getConnection()

module.exports = pool;