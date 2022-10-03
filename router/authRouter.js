const Controller = require('../controllers/authController')

const router = require('express').Router()

router.post('/register',Controller.register)

router.post('/login',Controller.login)

router.post('/googleLogin',Controller.google)

router.post('/facebookLogin',Controller.facebook)

module.exports = router