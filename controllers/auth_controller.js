const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const {CompanyModel} = require('../db')

class AuthController {

    static auth(req, res) {

        let secret = process.env.TOKEN_SECRET

        let ruc = req.body.ruc
        let password = req.body.password

        let dbuser = CompanyModel.findOne({
            where: {
                ruc: ruc
            }
        }).then((data) => {

            if (bcrypt.compareSync(password, data.password)) {
                let payload = { ruc: ruc }
                const token = jwt.sign(payload, secret, {expiresIn: '1800s'})
                res.json(token)
            } else {
                console.log("contrasenas distintas")
                res.sendStatus(401)
            }
        }).catch((err) => {
            console.log("usuario no existe")
            res.sendStatus(401)
        })

        
    }

}

module.exports = { AuthController }
