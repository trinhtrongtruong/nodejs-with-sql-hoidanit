
const express = require('express');
const {getHomepage, getTruong, getTruongKa, getCreatePage, getUpdatePage, postCreateUser, postUpdateUser, postDeleteUser, postHandleRemoveUser } = require('../controllers/homeController')
const router = express.Router();


//Khai báo route __ route.Method('/route', handle)
  router.get('/', getHomepage)
  
  router.get('/truong', getTruong)
  
  router.get('/TruongKa', getTruongKa)

  router.get('/create', getCreatePage)

  router.get('/update/:id', getUpdatePage)

  router.post('/create-user', postCreateUser)

  router.post('/update-user', postUpdateUser)

  router.post('/delete-user/:id', postDeleteUser)

  router.post('/delete-user', postHandleRemoveUser)

  module.exports = router;
  