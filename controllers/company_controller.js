const { CompanyModel, UserModel } = require("../db");

const bcrypt = require('bcrypt')

class CompanyController {
  static create(req, res) {
    let data = req.body
       
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
