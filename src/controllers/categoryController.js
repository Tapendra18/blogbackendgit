const categoryModel = require("../model/categoryModel");
const liveController = {};

//add category
liveController.categoryAdd = async function (req, res) {
  try {
    const { name, description, newWord, meta_title, meta_description } =
      req.body;
    console.log(req.body, "reqqqqq");
    // if (
    //   !name ||
    //   !description ||
    //   !word ||
    //   !newWord ||
    //   !meta_title ||
    //   !meta_description
    // ) {
    //   return res.status(400).send({
    //     success: false,
    //     message: "Please provide All fields",
    //   });
    // }
    const category = new categoryModel(req.body);
    await category.save();
    return res.status(201).send({
      success: true,
      message: "comment Created",
      category,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      msg: err + "error in api",
    });
  }
};

liveController.categoryGet = async function (req, res) {
  try {
    const category = await categoryModel.find();
    return res.status(200).send({
      success: true,
      data: category,
    });
  } catch (err) {
    return res.status(500).send({
      success: false,
      data: err,
    });
  }
};

liveController.categoryDelete = async function (req, res) {
  try {
    const category = await categoryModel.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(category);
  } catch (err) {
    return res.status(500).send({
      success: false,
      msg: err + "error in delete API",
    });
  }
};

module.exports = liveController;
