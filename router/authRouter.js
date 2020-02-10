const express = require("express");
const { authControllers, } = require("./../controllers");

const router = express.Router();

// Movie List Started //

// Get Movies
router.get("/get-Movies", authControllers.getMovies);

// Edit Movies
router.put("/edit-Movies", authControllers.editMovies);

// Add Movies
router.post("/add-Movies", authControllers.addMovies);

// Delete Movies
router.delete("/delete-Movies/:id", authControllers.deleteMovies);

// Movie List Ended //



module.exports = router;
