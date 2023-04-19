const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);

const postSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    meta_title: {
      type: String,
      required: true,
    },
    meta_description: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    features: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
    slug: {
      type: String,
      slug: "title",
    },
    tag: [
      {
        type: mongoose.Types.ObjectId,
        ref: "tag",
      },
    ],
    category: [
      {
        type: mongoose.Types.ObjectId,
        ref: "category",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const postModel = mongoose.model("post", postSchema);
module.exports = postModel;
