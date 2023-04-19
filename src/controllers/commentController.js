const commentModel = require("../model/commentModel");
const postModel = require("../model/postModel");
const liveController = {};

liveController.commentAdd = async function (req, res) {
  try {
    const { name, email, mobile, description } = req.body;

    if (!name || !email || !mobile || !description) {
      return res.status(400).send({
        success: false,
        message: "Please provide All fields",
      });
    }
    const comment = new commentModel(req.body);
    await comment.save();
    return res.status(201).send({
      success: true,
      message: "comment Created",
      comment,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({
      success: false,
      message: "Error While creating comment",
      err,
    });
  }
};

liveController.commentGet = async function (req, res) {
  try {
    const comment = await commentModel.find({});
    return res.status(200).send({
      success: true,
      data: comment,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      data: err,
    });
  }
};

module.exports = liveController;
