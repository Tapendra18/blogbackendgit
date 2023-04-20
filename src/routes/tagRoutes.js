const express = require("express");
const router = express.Router();
const tagController = require("../controllers/TagController");

router.post("/add", tagController.tagAdd);
router.get("/get", tagController.tagGet);
router.delete("/delete/:id", tagController.TagDelete);
router.patch("/update/:id", tagController.TagUpdate);

module.exports = router;
