import mysql from 'mysql2'

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'wcs_cda_tp_express'
})

connection.connect()

export {connection}