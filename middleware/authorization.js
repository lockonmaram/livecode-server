const jwt = require('jsonwebtoken')

class Authorization {
  static authorization (req, res, next){
    console.log(req.headers.authorization);
    jwt.verify(req.headers.authorization, process.env.JWT_SECRET_KEY, function(err,decoded){
      // console.log(err);
      // console.log(decoded);
      if (decoded === undefined) {
        res.status(400).json({error: "You are not authorized to access this API"})
      }else{
        next()
      }
    })
  }
}

module.exports = Authorization
