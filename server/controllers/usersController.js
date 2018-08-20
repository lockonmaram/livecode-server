const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class UserController {
  static registerUser(req, res){
    console.log(req.body);
    const saltUser = bcrypt.genSaltSync(8)
    const hashedPassword = bcrypt.hashSync(req.body.password, saltUser)
    User.create({
      username: req.body.username,
      password: hashedPassword,
    })
    .then(user=>{
      res.status(201).json({
        success: true,
        message: `Account ${user.username} registered`
      })
    })
    .catch(err=>{
      res.status(400).json({
        success: false,
        message: err.errmsg
      })
    })
  }
  static login(req, res){
    User.findOne({ username: req.body.username})
    .then(user => {
      const passwordCheck = bcrypt.compareSync(req.body.password, user.password)
      if (passwordCheck) {
        const tokenUser = jwt.sign({
          id: user._id,
          username: user.username,
        }, process.env.JWT_SECRET_KEY)
        console.log(tokenUser);
      res.status(201).json({token: tokenUser})
        // req.headers.token = tokenUser
      }else {
        res.status(400).json({success: false, message: 'wrong password'})
      }
    })
    .catch(err=>{
      res.status(400).json({success: false, message: 'username is not found'})
    })
  }
}

module.exports = UserController
