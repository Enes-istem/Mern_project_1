const User = require("../models/UserModel")
const bcrypt = require("bcryptjs")
const {check ,validationResult} = require("express-validator");
var jwt = require("jsonwebtoken")
exports.auth_register = async (req,res) => {
    const {firstName, lastName, email, password} = req.body

    const validationErr = validationResult(req)
    if(validationErr.errors.length > 0) {
        return res.status(400).json({errors: validationErr.array()})
    }

    const userData = await User.findOne({email: email})

    if(userData) {
        return res.status(400).json({errors: [{ message: "User already exists!"}]})
    }

    const salt = await bcrypt.genSalt(10);
    console.log("salt", salt);

    const newPassword = await bcrypt.hash(password, salt)
    console.log("newPassword", newPassword);


    const user = new User({
        firstName,
        lastName,
        email,
        password: newPassword,
    });
    await user.save();

    res.send("register copmleted")
}

exports.auth_login = async (req,res) => {
    const {email, password} = req.body

    const validationErr = validationResult(req)
    if(validationErr.errors.length > 0) {
        return res.status(400).json({errors: validationErr.array()})
    }



    const userData = await User.findOne({email: email})

    if(!userData) {
        return res.status(400).json({errors: [{ message: "User doesnt exists"}]})
    }
    




    const isPasswordMatch = await bcrypt.compare(password, userData.password)

    if (!isPasswordMatch) {
        return res.status(400).json({errors: [{ message: "Invalid credentials"}]})
    }

    jwt.sign({userData}, process.env.JWT_SECRET_KEY, {expiresIn: 3600}, (err,token) => {
        if (err) {
            return res.status(400).json({errors: [{ message: "Unknown error"}]})
        }
        res.send(token)
    })

    
}
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJfaWQiOiI1ZmQ2NjlhNzFhMTFhMzI2ZTAyMzFjNGMiLCJmaXJzdE5hbWUiOiJNZWhtZXQiLCJsYXN0TmFtZSI6IsO2emVyIiwiZW1haWwiOiJhQGEuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkZ3FoNjVnQ0dQZlprMHl6QXdaZzZ1LnNqOUswTHpmc2NqUUdCcjFHWDZvcmh0Yk5LdDkxaVMiLCJyZWdpc3RlckRhdGUiOiIyMDIwLTEyLTEzVDE5OjIxOjExLjM4MloiLCJfX3YiOjB9LCJpYXQiOjE2MDc4ODgyOTksImV4cCI6MTYwNzg5MTg5OX0.5hAw_vCls0s9FL1Rta-6D6ygWhjdWKFe2bhd-jdm2HQ