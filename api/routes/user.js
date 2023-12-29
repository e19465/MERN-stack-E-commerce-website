const User = require("../models/User");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();
const bcrypt = require("bcrypt");

// UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = await bcrypt.hash(req.body.password, 10);
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body, // take everything inside req.body and set it
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(`Error: ${err}`);
  }
});

// DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).json("User ID not found!");
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json("User successfully deleted!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ONE USER - ALLOWED ONLY TO ADMIN
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).json("User ID not found!");
  try {
    const foundUser = await User.findById(id);
    if (!foundUser) return res.status(404).json("User not found!");
    const { password, ...others } = foundUser._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL USERS - ALLOWED ONLY TO ADMIN
router.get("/getall", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const allUsersInDB = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    let allUsersRes = [];
    if (!allUsersInDB) return res.status(404).json("There are no users!");
    for (let i = 0; i < allUsersInDB.length; i++) {
      const oneUser = allUsersInDB[i];
      const { password, ...others } = oneUser._doc;
      allUsersRes.push(others);
    }
    res.status(200).json(allUsersRes);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// GET USER STATS - ALLOWED ONLY TO ADMIN
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    // we need user stats per month, to do that => we should group our items
    // to do that use => aggregate method in MongoDB

    const data = await User.aggregate([
      {
        // selecting matches greater than last year of created date
        $match: {
          createdAt: { $gte: lastYear },
        },
      },
      {
        // getting month numbers
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        // grouping users
        $group: {
          _id: "$month",
          // getting every registed user per month
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
