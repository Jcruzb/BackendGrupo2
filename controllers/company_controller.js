const { CompanyModel  } = require("../db");

const bcrypt = require('bcrypt')

class CompanyController {
  static create(req, res) {
    let data = req.body
       
        // let payload = req.body
        const salt = bcrypt.genSaltSync(10)
        let newPassword = bcrypt.hashSync(data.password, salt, function(err, hash) {});

        // newPassword = newPassword.toString();
        

        data.password=newPassword




        CompanyModel.create(data)
        .then((data) => {
          res.send(data);


      })
      .catch((err) => {
        res.status(400).send({
          message: err.message,
        });
      });
      
  }

  static findAll(req, res) {
    CompanyModel.find({}, function (err, companies) {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(companies);
      }
    });
  }
}
module.exports = { CompanyController };
