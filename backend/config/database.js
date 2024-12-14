const mongoose = require("mongoose");

const dbConnect = async() => {
  try {
 
    await mongoose.connect(process.env.MONGODB_URL)
  console.log("DB connect successfully");

  }
  catch (err) {
    console.log(err);
  }
  
}

module.exports = dbConnect;