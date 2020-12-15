
// const express = require("express");
// const { check } = require("express-validator");
// const AuthController = require("../controllers/AuthController");
// const validations = require("../middleware/validationMiddleware");
// const router = express.Router();
// // routes for /api/auth
// /**
//  * @route   POST /api/auth/register
//  * @desc    Register endpoint
//  * @access  Public
//  */
// router.post(
//   "/register",
//   validations.emailPasswordValidation,
//   AuthController.authRegister
// );
// /**
//  * @route   POST /api/auth/login
//  * @desc    Login endpoint
//  * @access  Public
//  */
// // router.post(
// //   "/login",
// //   validations.emailPasswordValidation,
// //   AuthController.authLogin
// // );
// module.exports = router;

















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