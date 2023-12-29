const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
/////////////////////////////////

// REGISTER
router.post("/register", async (req, res) => {
  const newUserUsername = req.body.username;
  const newUserPassword = req.body.password;
  const newUserEmail = req.body.email;
  if (!newUserUsername || !newUserPassword || !newUserEmail) {
    return res.status(400).json("Incomplete user register information.");
  }
  try {
    const find1 = await User.findOne({
      username: newUserUsername,
    });
    const find2 = await User.findOne({
      email: newUserEmail,
    });

    if (find1 || find2) {
      return res.status(409).json("Username or Email already exists.");
    }

    const encryptedPassword = await bcrypt.hash(newUserPassword, 10);
    const newUser = new User({
      username: newUserUsername,
      password: encryptedPassword,
      email: newUserEmail,
    });

    const savedUser = await newUser.save();
    const { password, ...others } = savedUser._doc;
    res.status(201).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const loginUsername = req.body.username;
  const loginPassword = req.body.password;

  if (!loginUsername || !loginPassword)
    return res.status(400).json("Username and Password must be provided!");

  try {
    const foundUser = await User.findOne({
      username: loginUsername,
    });
    if (!foundUser) return res.status(404).json("User not found!");
    const isPasswordCorrect = await bcrypt.compare(
      loginPassword,
      foundUser.password
    );
    if (!isPasswordCorrect) return res.status(401).json("Wrong credentials!");
    const accessToken = jwt.sign(
      {
        id: foundUser._id,
        isAdmin: foundUser.isAdmin,
      },
      process.env.JWT_ACCESS,
      { expiresIn: "3d" }
    );
    const { password, ...others } = foundUser._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    re.status(500).json(`Error: ${err}`);
  }
});

module.exports = router;
