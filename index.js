//pemanggilan port NPM
const express = require('express')
const app = express()
const port = 3002

// pemanggilan request body parse
const bodyparser = require('body-parser')

// pemanggilan file config.js di indexs.js
const db = require('./config.js')
const response = require('./request.js')
const { error } = require('console')

// penggunaan body parse
app.use(bodyparser.json())

// tambahkan route get kampus
app.get('/products', (req,res)=>{
    const sql = 'SELECT * FROM products'
    db.query(sql,(error, result)=>{
        response(200,result,'product_name',res)
    })
})

// route get data dari mahasiswa dan npm
app.get('/products/:products_id', (req,res)=>{
    const npm = req.params.npm
    const sql = `SELECT * FROM toko_komputer where products_id ='${products_id}'`
    db.query(sql, (err, result)=>{
        if(err) throw err
        response(200,result,"get detail products",res)
    })
})

// route post mahasiswa
app.post('/toko_komputer', (req, res)=>{
    const {product_id, product_name, brand, category, price, stock}=req.body
    const sql = `INSERT INTO toko_komputer (product_id, product_name, brand, category, price, stock) values ('${product_id}','${product_name}','${brand}','${category}','${price}','${stock}');`

    db.query(sql,(error, fields)=>{
        if(error) response(500, 'invalid', `${product_id} dengan npm ${product_name} sudah ditambahkan`, res)
        if(fields?.affectedRows){
            const data ={
                isSucces: fields.affectedRows,
                id:fields.insertId,
            }
            response(200,data,"Data berhasil di simpan",res)
        }
    })
})


app.listen(port, () => {
    console.log(`Runing in port ${port}`)
})