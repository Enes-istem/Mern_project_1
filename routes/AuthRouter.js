const express = require("express");
const {check ,validationResult} = require("express-validator");

const router = express.Router()
const AuthController = require("../controllers/AuthController")

router.post("/register", [
    check("password", "Please enter a password with 6 and more chars").isLength({
        min: 6
    }),
    check("email", "Please enter a valid email").isEmail()

], AuthController.auth_register)

router.post("/login",[
    check("password", "Please enter a password with 6 and more chars").isLength({
        min: 6
    }),
    check("email", "Please enter a valid email").isEmail()

],AuthController.auth_login)




module.exports = router