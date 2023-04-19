const postModel = require("../model/postModel");
const liveController = {};

liveController.postAdd = async function (req, res) {
  try {
    if (req.files.thumbnail && req.files.features) {
      req.body.thumbnail = req.files.thumbnail[0].path;
      req.body.features = req.files.features[0].path;
    }
    const post = new postModel(req.body);
    await post.save();
    return res.status(200).send({
      success: true,
      data: post,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      msg: err + "Not Working",
    });
  }
};

liveController.postgetSlug = async function (req, res) {
  const { slug } = req.params;

  try {
    const post = await postModel.findOne({ slug });
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.send(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

liveController.postGet = async function (req, res) {
  try {
    const post = await postModel.find();
    return res.status(200).send({
      success: true,
      data: post,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      data: err,
    });
  }
};

liveController.postDelete = async function (req, res) {
  try {
    const post = await postModel.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(post);
  } catch (err) {
    return res.status(500).send({
      success: false,
      msg: err + "error in delete API",
    });
  }
};

module.exports = liveController;
