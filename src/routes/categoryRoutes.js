const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.post("/add", categoryController.categoryAdd);
router.get("/get", categoryController.categoryGet);
router.delete("/delete/:id", categoryController.categoryDelete);

module.exports = router;
