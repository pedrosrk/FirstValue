const express = require('express')
const path = require('path')
const mysql = require('mysql')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')


dotenv.config({ path: './.env'})

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1512',
    database: process.env.DATABASE
})

const publicDirectory = path.join(__dirname, './public')
app.use(express.static(publicDirectory))


// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: false}))

// Parse JSON bodies (as sent by API clientes )
app.use(express.json())
app.use(cookieParser())

// console.log(__dirname)

app.set('view engine', 'hbs')

db.connect((error) => {
    if(error){
        console.log(error)
    }else{
        console.log("MYSQL Connected ...")
    }
})

//Define Routes
app.use('/', require('./routes/pages'))
app.use('/auth', require('./routes/auth'))


app.listen(3001, () => {
    console.log("Server started on Port 3001")
})