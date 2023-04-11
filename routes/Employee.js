const express = require('express')
const router = express.Router();

const getAllEmployeeDetails=require("../controllers/employee")


router.route("/").get(getAllEmployeeDetails)




module.exports=router