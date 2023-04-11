const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const product_route = require("./routes/Employee");
const connectDB = require("./db/connect");
const cors=require('cors');

const test=require('./routes/Employee')




app.use(cors());

app.use("/api/employee", product_route);
// app.use("/api/testing", test);



app.get("/", (req, res) => {
  res.send("I am Live Now !!! ");
});








const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Listening at Port  ${PORT} `);
    });
  } catch (error) {
    console.log("500 Internal Server Error");
  }
};

start();
