const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const {CompanyController} = require('./controllers/company_controller')




const app = express()
app.use(express.json());
app.use(cors());



app.use(bodyParser.json())

app.post('/register',CompanyController.create)
app.get('/companies', CompanyController.findAll)


app.listen(3001, ()=>{
    console.log('Server running...')
})