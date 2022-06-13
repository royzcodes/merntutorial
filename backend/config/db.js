const mongose = require("mongoose");

const connect = async () => {
  try {
    const con = await mongose.connect(process.env.MONGO_URI);
    console.log(con);
  } catch (error) {
    console.log(error);
    console.log("Gagal Connect DB ");
  }
};

module.exports = connect;
