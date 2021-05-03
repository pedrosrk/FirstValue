/*
***********************Aula01****************
pwd
ls
node -v
npm init -y
npm i express mysql dotenv hbs
npm i --save nodemon
[package.json] "start": "nodemon app.js"
-----------------------------------------
----------------app.js-------------------
const express = require('express')

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
})

app.listen(3000, () => {
    console.log("Server started on Port 3000")
})
***********************Aula02***********************************************************************************************
-----------------database-----------------------
CREATE TABLE USER (
    id int AUTO_INCREMENT,
    name varchar(255),
    email varchar(255),
    password varchar(255),
    PRIMARY KEY (id)
);
------------app.js------------------------------
const express = require('express')
const mysql = require('mysql')

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1512',
    database: 'loginapp'
})

db.connect((error) => {
    if(error){
        console.log(error)
    }else{
        console.log("MYSQL Connected ...")
    }
})

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>")
})

app.listen(3000, () => {
    console.log("Server started on Port 3000")
})
***********************Aula03*********************************************************************************************************
.env -> DATABASE = loginapp
folder views -> file index.hbs
folder public -> file -> style.css
------------app.js------------------------------
const express = require('express')
const path = require('path')
const mysql = require('mysql')
const dotenv = require('dotenv')

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

console.log(__dirname)

app.set('view engine', 'hbs')

db.connect((error) => {
    if(error){
        console.log(error)
    }else{
        console.log("MYSQL Connected ...")
    }
})

app.get("/", (req, res) => {
    //res.send("<h1>Home Page</h1>")
    res.render("index")
})

app.listen(3000, () => {
    console.log("Server started on Port 3000")
})
------------index.hbs------------------------------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/style.css">
    <title>Document</title>
</head>
<body>
    <h1>Handlebars Home Page</h1>
</body>
</html>
------------style.css------------------------------
body {
    background-color: orange
}

***********************Aula03**********************************************************************************************************
In site https://getbootstrap.com/docs/4.6/components/forms/

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

-------------------index.hbs--------------------------------------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="/style.css">
    <title>Document</title>
</head>
<body>
    <nav>
        <h4>Node MySQL</h4>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
            </ul>
    </nav>
    <div class="container mt-4">
        <div class="jumbotron">
            <h1 class="display-4">Login Project</h1>
            <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr class="my-4">
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
    </div>
    <script><script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script></script>
</body>
</html>

***********************Aula04**********************************************************************************************************
in views create register.hbs
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="/style.css">
    <title>Document</title>
</head>
<body>
    <nav>
        <h4>Node MySQL</h4>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
            </ul>
    </nav>
    <div class="container mt-4">
        <div class="card">
            <div class="card-header"></div>
                <h4>Register Form</h4>
            </div>
             <div class="card-body"></div>
                <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" name="name">
                    </div>

                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" class="form-control" id="email" name="email">
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" name="password">
                    </div>
 
                    <button type="Submit" class="btn btn-primary">Register User</button>
                </form>
            </div>
        </div>
    </div>
    <script><script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script></script>
</body>
</html>

--------------------app.js-----------------------------------------
app.get("/register", (req, res) => {
    //res.send("<h1>Home Page</h1>")
    res.render("register")
})
***********************Aula05**********************************************************************************************************
create folder routes -> pages.js
create folder controllers -> 
--------------------pages.js-----------------------------------------
const express = require('express');

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/register', (req, res) => {
    res.render('register');
})

module.exports = router;

--------------------register.js-----------------------------------------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="/style.css">
    <title>Document</title>
</head>
<body>
    <nav>
        <h4>Node MySQL</h4>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
            </ul>
    </nav>
    <div class="container mt-4">
        <div class="card">
            <div class="card-header">
                Register Form
            </div>
             <div class="card-body">
                <form action="/auth/register" method="POST">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" name="name">
                    </div>

                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" class="form-control" id="email" name="email">
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" name="password">
                    </div>
 
                    <button type="Submit" class="btn btn-primary">Register User</button>
                </form>
            </div>
            </div>
        </div>
    </div>
    <script><script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script></script>
</body>
</html>
--------------------auth.js-----------------------------------------
exports.register = (req, res) => {
    console.log(req.body)
    res.send("Form Submitted")
}
***********************Aula06**********************************************************************************************************
--------------------register.hbs-----------------------------------------
 <div class="form-group">
                        <label for="password">Confirm Password</label>
                        <input type="password" class="form-control" id="passwordConfirm" name="passwordConfirm">
                    </div>

npm i bcryptjs
npm i cookie-parser jsonwebtoken

{{ #if message }}
        <h4 class="alert alert-danger mt-4">{{mensage}}</h4>
        {{ /if }} -> Not Work
        
***********************Aula07**********************************************************************************************************


*/