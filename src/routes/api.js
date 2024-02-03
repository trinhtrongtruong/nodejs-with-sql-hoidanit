const express = require('express');
const routerAPI = express.Router();
const {getUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFileAPI, postUploadMultipleFilesAPI} = require('../controllers/apiController')
const {postCreateCustomer, postCreateArrayCustomer, getAllCustomers, putUpdateCustomer, deleteACustomer, deleteArrayCustomer} = require('../controllers/customerController')
const {postCreateProject, getAllProject, deleteProject, updateProject} = require('../controllers/projectController')
const {postCreateTask, getAllTask, deleteTask, updateTask} = require('../controllers/taskController')


//Khai báo route __ route.Method('/route', handle)
routerAPI.get('/', (req, res ) => {
    res.send("Hello world with API")
})
routerAPI.get('/test', (req, res ) => {
    res.status(200).json({
        data:'Hello first api'
    })
})

routerAPI.get('/users', getUsersAPI)
routerAPI.post('/users', postCreateUserAPI)
routerAPI.put('/users', putUpdateUserAPI)
routerAPI.delete('/users', deleteUserAPI)

routerAPI.post('/file', postUploadSingleFileAPI)
routerAPI.post('/files', postUploadMultipleFilesAPI)
routerAPI.post('/customers', postCreateCustomer)
routerAPI.post('/customers-many', postCreateArrayCustomer)
routerAPI.get('/customers', getAllCustomers)
routerAPI.put('/customers', putUpdateCustomer)
routerAPI.delete('/customers', deleteACustomer)
routerAPI.delete('/customers-many', deleteArrayCustomer)

routerAPI.post('/projects', postCreateProject)
routerAPI.get('/projects', getAllProject)
routerAPI.delete('/projects', deleteProject)
routerAPI.put('/projects', updateProject)

routerAPI.post('/tasks', postCreateTask)
routerAPI.get('/tasks', getAllTask)
routerAPI.delete('/tasks', deleteTask)
routerAPI.put('/tasks', updateTask)

routerAPI.get('/info', (req, res) => {
    console.log(">>> check query: ", req.query)
    return res.status(200).json({
        data: req.query
    })
});
routerAPI.get('/info/:name/:address', (req, res) => {
    console.log(">>> check params: ", req.params)
    return res.status(200).json({
        data: req.params
    })
});

module.exports = routerAPI;
  