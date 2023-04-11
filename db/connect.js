require("dotenv").config();
const mongoose = require("mongoose");

const uri =
  "mongodb://pamit7407084:amit1234@ac-y3vsow9-shard-00-00.c9z5z20.mongodb.net:27017,ac-y3vsow9-shard-00-01.c9z5z20.mongodb.net:27017,ac-y3vsow9-shard-00-02.c9z5z20.mongodb.net:27017/pamit7407084?ssl=true&replicaSet=atlas-15ugdu-shard-0&authSource=admin&retryWrites=true&w=majority";

const connectDB = () => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.set("strictQuery", true);

module.exports = connectDB;
