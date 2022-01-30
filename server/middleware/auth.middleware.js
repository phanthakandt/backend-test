exports.authenticate = (req,res,next) => {
    const authHeader = req.headers['authorization']
    
    if(authHeader !== '20scoop') return res.status(401).send('please give api key')
    next()
}