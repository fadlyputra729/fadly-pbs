//request library mysql
const mysql = require('mysql')

//variabel koneksi untuk database
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'toko_komputer'
})

//kirimkan variabel keluar untuk digunakan diluar file
module.exports = db