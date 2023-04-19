const express = require("express");
const router = express.Router();
const tagController = require("../controllers/TagController");

router.post("/add", tagController.tagAdd);
router.get("/get", tagController.tagGet);
router.delete("/delete", tagController.tagDelete);

module.exports = router;
