require('dotenv').config() 
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')

const app = express() // app express
const port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME;

//config res.body
app.use(express.json()) // for json
app.use(express.urlencoded({extended: true})) // for form data

// config template engine 
configViewEngine(app)

//Khai báo route
app.use('/',webRoutes)

// create the connection to database


// simple query
// connection.query(
//   'SELECT * FROM Users u',
//   function(err, results, fields) {
//     console.log(">>> check results: ",results); // results contains rows returned by server
//   }
// );

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})

