const express = require("express");
const { connectionMovCat } = require("./../controllers");

const router = express.Router();

router.get("/get-movcat", connectionMovCat.getmovcat);

router.post("/add-movcat", connectionMovCat.addMovCat);

router.delete("/delete-movcat", connectionMovCat.deleteMovCat);

module.exports = router;
