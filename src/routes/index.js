const express = require("express");
const router = express.Router();

const tagRoutes = require("./tagRoutes");
const categoryRoutes = require("./categoryRoutes");
const postRoutes = require("./postRoutes");
const commentRoutes = require("./commentRoutes");
const likeUnlike = require("./likeUnlikeRoutes");

router.use("/tag", tagRoutes);
router.use("/category", categoryRoutes);
router.use("/post", postRoutes);
router.use("/comment", commentRoutes);
router.use("/likeunlike", likeUnlike);

module.exports = router;
