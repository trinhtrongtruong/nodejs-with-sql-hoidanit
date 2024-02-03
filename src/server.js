require('dotenv').config() 
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const apiRoutes = require('./routes/api')
const fileUpload = require('express-fileupload')
const connection = require('./config/database')
const { MongoClient } = require('mongodb');

const app = express() // app express
const port = process.env.PORT || 8000;
const hostname = process.env.HOST_NAME;

// config file upload
app.use(fileUpload());
//config res.body
app.use(express.json()) // for json
app.use(express.urlencoded({extended: true})) // for form data

// config template engine 
configViewEngine(app)

//Khai báo route
app.use('/',webRoutes);
app.use('/v1/api',apiRoutes);

// //test connection 

(async () => {
  try {
    //using mongoose
     await connection();
    // let a = await collection.findOne({ address: "Ha Noi"})


    //using mongodb driver
    // Connection URL
    const url = process.env.DB_HOST_WITH_DRIVER;
    const client = new MongoClient(url);

    // Database Name
    const dbName = process.env.DB_NAME;
     // Use connect method to connect to the server
     await client.connect();
     console.log('Connected successfully to server');
     const db = client.db(dbName);
     const collection = db.collection('customers');

    //  collection.insertOne({"name": "hoidanit"})
    // let a = await collection.findOne({ address: "Ha Noi"})
    // console.log(">>>Find:", a)
     // the following code examples can be pasted here...
    
    //
    app.listen(port, hostname, () => {
      console.log(`Backend zero app listening on port ${port}`)
    })
  } catch (error) {
    console.log(">>> Error connect DB :", error)
  }
})();



