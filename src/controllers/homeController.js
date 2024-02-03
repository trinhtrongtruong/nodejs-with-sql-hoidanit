
const connection = require('../config/database')
const {getAllUsers, getUserById, upDateUserById, deleteUserById} = require('../services/CRUDService')

const User= require("../models/user")

const getHomepage = async (req, res) => {
    let results = await User.find({})
    return res.render('home.ejs',{listUsers: results})
}

const getTruong = (req, res) => {
    res.send('Hello truong')
}

const getTruongKa = (req, res) => {
    res.render('sample.ejs')
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id
    // let user = await getUserById(userId)
    let user = await User.findById(userId).exec()
    res.render('edit.ejs', {userEdit: user}) // gán user bằng userEdit bên View(edit.ejs)
}

const postCreateUser = async (req, res) => {
    console.log(">>> Req.body", req.body)
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    // let{email, name, city} = req.body
    await User.create({
        email: email,
        name: name,
        city: city
    })
    res.send(" Create user success!")
}
const postUpdateUser = async (req, res) => {
    console.log(">>> Req.body", req.body)
    let email = req.body.email
    let name = req.body.name
    let city = req.body.city
    let userId = req.body.userId
    // await upDateUserById(email, name, city, userId)
    await User.updateOne({_id: userId}, {email: email, name: name,city: city})
    // res.send(" Update user success!")
    res.redirect('/')
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id
    // let user = await getUserById(userId)
    let user = await User.findById(userId).exec()
    res.render('delete.ejs', {userEdit: user})
}

const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId
    // await deleteUserById(id)
    await User.deleteOne({_id: id})
    res.redirect('/')
}

module.exports =  {
    getHomepage,
    getTruong,
    getTruongKa,
    getCreatePage,
    getUpdatePage,
    postCreateUser,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}