const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post(
  "/add",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "features", maxCount: 1 },
  ]),
  postController.postAdd
);
router.get("/get", postController.postGet);
router.get("/get/:slug", postController.postgetSlug);
router.delete("/delete/:id", postController.postDelete);
module.exports = router;
