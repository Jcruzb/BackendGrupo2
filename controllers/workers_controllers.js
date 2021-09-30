const { WorkerModel } = require("../models/workers");

class WorkerController {
  static create(req, res) {
    let data = req.body;
    WorkerModel.create(data)
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
 
    var query = WorkerModel.find({})
    WorkerModel.find({}, function (err, companies) {
        if (err) {
          res.sendStatus(404);
        } else {
          res.send(companies);
        }
      });
         
}

static findById(req, res) {
    let pk = req.params.id
    let query = WorkerModel.findById(pk)

    query.exec(function(err, ticket){
        if (err) {
            res.sendStatus(404)
        } else {
            res.send(ticket)
        }
    })
}

}

module.exports = { WorkerController };
