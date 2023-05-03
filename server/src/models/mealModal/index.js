const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter meal name"],
  },
  descripition: {
    type: String,
    required: [true, "Please enter meal descripition"],
  },
  price: {
    type: Number,
    required: [true, "Please enter valid meal price"],
    default: 1,
  },
  category: {
    type: String,
    required: true,
  },
  images: [
    {
      url: {
        type: String,
      },
    },
  ],
});

const Meals = new mongoose.model("Meals", mealSchema);

module.exports = Meals;
