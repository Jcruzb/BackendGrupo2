const { IncidentModel } = require("../models/incidents");

class IncidentController {
  static create(req, res) {
    let data = req.body;
    IncidentModel.create(data)
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
    var query = IncidentModel.find({});
    IncidentModel.find({}, function (err, companies) {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(companies);
      }
    });
  }

  static findById(req, res) {
    let pk = req.params.id;
    let query = IncidentModel.findById(pk);

    query.exec(function (err, ticket) {
      if (err) {
        res.sendStatus(404);
      } else {
        res.send(ticket);
      }
    });
  }
}

module.exports = { IncidentController };
