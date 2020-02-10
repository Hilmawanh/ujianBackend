const express = require("express");
const { manageCategorie } = require("./../controllers");

const router = express.Router();

// Manage Categories started //

// Add Category
router.post("/add-Categories", manageCategorie.addCategory);

// Get Category
router.get("/get-Categories", manageCategorie.getCategory);

// Edit Category
router.put("/edit-Categories", manageCategorie.editCategory);

// Delete Category
router.delete("/delete-Categories/:id", manageCategorie.deleteCategory);

// Manage Categories ended //

module.exports = router;
