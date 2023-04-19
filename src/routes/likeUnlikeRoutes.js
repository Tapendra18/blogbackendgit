const express = require("express");
const router = express.Router();
const likeUnlike = require("../controllers/likeUnlikeController");

router.post("/likeadd", likeUnlike.like);
router.post("/unlikeadd", likeUnlike.unlike);
router.get("/get", likeUnlike.likeGet);
router.get("/unlikeGet", likeUnlike.unlikeGet);

module.exports = router;
