const mongoose = require("mongoose");
const config = require("config");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.get("mongoURI"), {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log("Mongo DB Connected...!");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
