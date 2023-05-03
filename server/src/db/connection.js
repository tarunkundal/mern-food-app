const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://tschauhan271:tarun@cluster0.qgyfaa5.mongodb.net/food_app?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connect to database sucessfully");
  })
  .catch((err) => {
    console.log("Error while connected to databse", err);
  });
