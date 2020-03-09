const mongoose = require("mongoose");
const DB_URI = process.env.MONGODB_URI;

const connect = () => {
  mongoose.connect(DB_URI, { useNewUrlParser: true });
  const connection = mongoose.connection;
  connection.on("error", () => console.error("Ops, não conectou :/"));

  connection.once("open", () => console.log("Yupiii, conectamos! :D"));
};

module.exports = { connect };
