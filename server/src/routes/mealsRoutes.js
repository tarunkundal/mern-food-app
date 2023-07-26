const express = require("express");
const {
  createMeal,
  allmeals,
  updatemeals,
  removeMeal,
} = require("../controllers/mealsController");

const router = express.Router();

// create meals
router.post("/new", createMeal);

// get all meals
router.get("/allmeals", allmeals);

// update meal
router.put("/update/:_id", updatemeals);

// delete meal
router.delete("/delete/:_id", removeMeal);

router.get("/getdata", (req, res) => {
  console.log(req, res);
  res.send("Hello from sidde");
});

module.exports = router;
