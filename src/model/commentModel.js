const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      //   required: true,
    },
    email: {
      type: String,
      //   required: true,
    },
    mobile: {
      type: String,
      //   required: true,
    },
    description: {
      type: String,
      //   required: true,
    },
    post: {
      type: mongoose.Types.ObjectId,
      ref: "post",
    },
  },
  {
    timestamps: true,
  }
);

const commentModel = mongoose.model("comment", commentSchema);
module.exports = commentModel;
