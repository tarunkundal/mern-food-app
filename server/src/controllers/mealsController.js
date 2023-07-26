const Meals = require("../models/mealModal");

// new meal
const createMeal = async (req, res) => {
  try {
    console.log(req.body);
    const { name, descripition, price, category, images } = req.body;

    if (!name || !descripition || !price || !category || !images) {
      return res.status(409).json({ message: "Please enter all fields" });
    }

    const meal = new Meals(req.body);

    await meal.save();

    res.status(201).json({ message: "Meals created sucessfully", meal });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// get all meals
const allmeals = async (req, res) => {
  console.log(req);
  try {
    const allmeals = await Meals.find();
    res.status(200).json(allmeals);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// update meals
const updatemeals = async (req, res) => {
  console.log(req, res);
  try {
    const { _id } = req.params;
    console.log(req.params);

    const mealToBeUpdated = await Meals.findOne({ _id });

    if (!mealToBeUpdated) {
      return res
        .status(404)
        .json({ message: "Cannot find meal for selected id" });
    }
    const updatedMeal = await Meals.findByIdAndUpdate(
      _id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedMeal);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// remove meal
const removeMeal = async (req, res) => {
  try {
    const { _id } = req.params;
    const removedMeal = await Meals.findByIdAndDelete({ _id });

    res.status(200).json({ message: "Meal deleted sucessfully" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { createMeal, allmeals, updatemeals, removeMeal };
