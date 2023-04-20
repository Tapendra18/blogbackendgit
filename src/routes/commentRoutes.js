const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");

router.post("/add", commentController.commentAdd);
router.get("/get", commentController.commentGet);
router.delete("/delete/:id", commentController.commentDelete);

module.exports = router;
