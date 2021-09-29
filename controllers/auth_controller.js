const jwt = require('jsonwebtoken')

const { CompanyModel } = require("../models/db")

class AuthController {

    static auth(req, res) {
        let ruc = req.body.ruc
        let password =req.body.password

        CompanyModel.authenticate(ruc, password, (err, company) => {
            if(err) {
                err.status = 401
                res.sendStatus(401)
            } else {
                let payload = {id: company._id}
                let secret = process.env.SECRET
                const token = jwt.sign(payload, secret, {expiresIn: '1800s'})
                res.json(token)
            }
        })
    }

}

module.exports = { AuthController }