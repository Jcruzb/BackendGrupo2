const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

mongoose.connect('mongodb://localhost:27017/company',{useNewUrlParser:true})

var CompanySchema = mongoose.Schema({
    ruc:{
        type: Number,
        required: true
    },
    raz_social:{
        type: String,
        required: true
   },
   rep_legal:{
       type:String,
       required:true
   },
   mail:{
    type:String,
    required:true
    },
    telefono:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        require:true
    }

//    vig_pod:{
//        type:File,
//        require:false
//    }


})

const CompanyModel = mongoose.model('company', CompanySchema)

// const UserModel = mongoose.model('ruc', CompanySchema)




module.exports ={CompanyModel}