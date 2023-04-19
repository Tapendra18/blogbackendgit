const tagModel = require("../model/TagModel");
const liveController = {};

//add tag
liveController.tagAdd = async function (req, res) {
  try {
    const {
      name,
      description,
      word,
      newWord,
      meta_title,
      meta_description,
      keyword,
    } = req.body;

    // if (
    //   !name ||
    //   !description ||
    //   !word ||
    //   !newWord ||
    //   !meta_title ||
    //   !meta_description ||
    //   !keyword
    // ) {
    //   return res.status(400).send({
    //     success: false,
    //     message: "Please provide All fields",
    //   });
    // }
    const tag = new tagModel(req.body);
    console.log(tag, "tagggggggggg");
    await tag.save();
    console.log(tag, "saveeeeee");
    return res.status(201).send({
      success: true,
      data: tag,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      msg: err + "error in api ",
    });
  }
};

//Get All Blogs
liveController.tagGet = async function (req, res) {
  try {
    const tag = await tagModel.find();
    return res.status(200).send({
      success: true,
      data: tag,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      data: err,
    });
  }
};

liveController.tagDelete = async function (req, res) {
  try {
    const tag = await tagModel.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(tag);
  } catch (err) {
    return res.status(500).send({
      success: false,
      msg: err + "error in delete API",
    });
  }
};

module.exports = liveController;
