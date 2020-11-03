const jwt = require('jsonwebtoken');

function createToken(data) {
    let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),//24小时的有效期
        data: 'foobar'
    }, 'secret');

    //   console.log(token)
    return token
}


// 解析token
function verifyToken(req, res) {
    let token = req.headers.authorization
    if (!token) {
      return res.json({err:-1,msg:'token invalid'})
    }
    return new Promise(function(resolve, reject) {
      try {
        let decoded = jwt.verify(token, 'qf')
        resolve(decoded.data)
      } catch(err) {
        // reject({err:-1,msg:'token invalid'})
        res.json({err:-1,msg:'token invalid'})
      }
    })
}

module.exports = {
    createToken,
    verifyToken
}

// createToken({name:'sdf',password:'123'})


