const { eachHourOfInterval } = require('date-fns')
const jwt = require('jsonwebtoken')
const verifyUser = (req, res, next) => {
    if (!req.headers.authorization) {
        let err = new Error('uthorization token is missing')
        res.status(400)
        return next(err)
    }
    token = req.headers.authorization.split(' ')[1]
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) return next(err)

        req.user = decoded
        next()
    })


}
const VerifyAdmin = (req, res, next) => {
    if(req.user.role != 'Admin'){
        let err=new Error('You are not authorized')
        res.status(403)
        return next(err)
    }
    next()

}
const verifyManager=(req, res, next)=>{
    if(req.user.role=="Manager"|| req.user.role=="Admin" ){
        return next()
    }
    res.status(403)
    next(new(Error('not authorized')))

}
module.exports = {
    verifyUser,
    VerifyAdmin,
    verifyManager
}