const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    word: {
      type: Number,
    },
    newWord: {
      type: Number,
    },
    meta_title: {
      type: String,
    },
    meta_description: {
      type: String,
    },
    keyword: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  { timestamps: true }
);

const tagModel = mongoose.model("tag", tagSchema);
module.exports = tagModel;
