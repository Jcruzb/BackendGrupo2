const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/company", {
  useNewUrlParser: true,
});

var WorkerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  dni: {
    type: Number,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  mail: {
    type: String,
    require: true,
  },
});

const WorkerModel = mongoose.model("worker", WorkerSchema);

module.exports = { WorkerModel };
