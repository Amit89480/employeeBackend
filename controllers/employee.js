const EmployeeData = require("../models/employee");
const getEmployeeDetails = async (req, res) => {




  const { department, name, sort, select } = req.query;
  const queryObject = {};
  if (department) {
    queryObject.company = department;
  }

  if (name) {
    queryObject.name = { $regex: name, $option: "i" };
  }



  let apiData = EmployeeData.find(req.query);

  if (sort) {
    let sortFixSpacingProblem = sort.split(",").join(" ");
    apiData = apiData.sort(sortFixSpacingProblem);
  }



  if (select) {
 
    let selectFixSpacingProblem = select.split(",").join(" ");
    apiData = apiData.select(selectFixSpacingProblem);
    }
    

    let page = Number(req.query.page)||1
    let limit = Number(req.query.limit)||3
    
    let skippingPrevious = (page - 1) * limit
    
  apiData.skip(skippingPrevious).limit(limit)

  const employee = await EmployeeData.find({});
    res.status(200).json({employee, nbhits: employee.length});
};

// const testing = async (req, res) => {
//   const myData1 = await EmployeeData.find({});

//   res.status(200).json({ myData1, nbHits: myData1.length });
// };

module.exports = getEmployeeDetails;
// module.exports=testing;