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

liveController.TagDelete = async function (req, res) {
  try {
    const tag = await tagModel.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    return res.status(200).send({
      success: true,
      data: tag + "successfully Delete",
    });
    // res.send(tag);
  } catch (err) {
    return res.status(500).send({
      success: false,
      msg: err + "error in delete API",
    });
  }
};

liveController.TagUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, keyword, meta_description } = req.body;
    const tag = await tagModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    return res.status(200).send({
      success: true,
      message: "Blog Updated",
      tag,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({
      success: false,
      message: "Error while updating Blog",
      err,
    });
  }
};

module.exports = liveController;
