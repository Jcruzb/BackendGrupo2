const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/company", {
  useNewUrlParser: true,
});

var IncidentsSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  incident_date: {
    type: String,
    required: true,
  },
  affected: {
    type: Number,
    required: true,
  },
  name:{
    type: String,
    required: true, 
  }

//   Ingresar Foto
 
});

const IncidentModel = mongoose.model("Incident", IncidentsSchema);

module.exports = { IncidentModel };
