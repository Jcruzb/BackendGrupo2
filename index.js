const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const { CompanyController } = require("./controllers/company_controller");
const { AuthController } = require("./controllers/auth_controller");
const { WorkerController } = require("./controllers/workers_controllers");
const { IncidentController } = require("./controllers/incident_controller");

const jwtmiddleware = require("./middlewares/jwt_middleware");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(bodyParser.json());

app.post("/register", CompanyController.create);
app.get("/companies", CompanyController.findAll);
app.post("/login", AuthController.auth);

// Workers
app.post("/workercreate", WorkerController.create);
app.get("/workersview", WorkerController.findAll);
app.get("/workersview/:id", WorkerController.findById);

// Incidents
app.post("/incidentreport", IncidentController.create);
app.get("/incidentsview", IncidentController.findAll);
app.get("/incidentview/:id", IncidentController.findById);

app.listen(3001, () => {
  console.log("Server running ...");
});
