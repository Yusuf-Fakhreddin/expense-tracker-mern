const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(
      `mongoDB connected:${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log(`ERROR: ${err.message}`.red);
    process.exit(1); // shutdown the application
  }
};

module.exports = connectDB;
