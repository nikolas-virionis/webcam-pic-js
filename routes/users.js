var express = require("express");
var router = express.Router();
const multer = require("multer");
const upload = multer({dest: "../public/img"});
/* GET users listing. */
router.get("/add-pic", upload.single("pic"), async (req, res, next) => {});

module.exports = router;
