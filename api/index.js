const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = 5000 || process.env.PORT;

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

// json middleware
app.use(express.json());

// middleware for form data / url encoded data
app.use(express.urlencoded({ extended: false }));

// user registration/ login routes
app.use("/api/auth", require("./routes/auth"));

// user put,delete,get routes
app.use("/api/users", require("./routes/user"));

// product routes
app.use("/api/products", require("./routes/product"));

// cart routes
app.use("/api/carts", require("./routes/cart"));

// order routes
app.use("/api/orders", require("./routes/order"));

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
