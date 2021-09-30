const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose.connect("mongodb://localhost:27017/company", {
  useNewUrlParser: true,
});

var CompanySchema = mongoose.Schema({
  ruc: {
    type: Number,
    required: true,
  },
  raz_social: {
    type: String,
    required: true,
  },
  rep_legal: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  telefono: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    require: true,
  },
});

CompanySchema.statics.authenticate = function (ruc, password, callback) {
  CompanyModel.findOne({ ruc: ruc }).exec((err, company) => {
    if (err) {
      callback(err);
    } else {
      bcrypt.compare(password, company.password, (err, result) => {
        if (result == true) {
          return callback(err, company);
        } else {
          let err = new Error("Wrong password");
          err.status = 401;
          callback(err);
        }
      });
    }
  });
};

const CompanyModel = mongoose.model("company", CompanySchema);

module.exports = { CompanyModel };
