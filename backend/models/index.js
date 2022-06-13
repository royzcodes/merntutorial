const mongoose = require("mongoose");
const resutldata = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please Add Field"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = ("Goals", resutldata);
