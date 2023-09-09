const express = require("express");
const router = express.Router();

const mediaHandler = require("./handler/media");

/* GET users listing. */
router.post("/", mediaHandler.create);
router.get("/", mediaHandler.getAll);

module.exports = router;
