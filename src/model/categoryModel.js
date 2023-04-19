const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    word: {
      type: String,
      required: true,
    },
    newWord: {
      type: String,
    },
    metatitle: {
      type: String,
      required: true,
    },
    meta_description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

const categoryModel = mongoose.model("category", categorySchema);
module.exports = categoryModel;
