const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const Cart = require("../models/Cart");
const router = require("express").Router();
///////////////////////////////////////////

// CREATE
router.post("/createcart", verifyTokenAndAuthorization, async (req, res) => {
  if (!req.body) return res.status(400).json("Cart can't be empty!");
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(201).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE CART
router.put("/updatecart/:id", verifyTokenAndAuthorization, async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).json("Cart ID must be provided!");
  try {
    const foundCart = await Cart.findById(id);
    if (!foundCart) return res.status(404).json("Cart not found!");
    const updatedCart = await Cart.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE CART
router.delete(
  "/deletecart/:id",
  verifyTokenAndAuthorization,
  async (req, res) => {
    const id = req.params.id;
    if (!id) return res.status(400).json("Cart ID required!");
    try {
      const foundCart = await Cart.findById(id);
      if (!foundCart) return res.status(404).json("Cart not found!");
      await Cart.deleteOne(foundCart);
      res.status(200).json("Cart has been successfully deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

// GET USER CART
router.get(
  "/getcart/:userId",
  verifyTokenAndAuthorization,
  async (req, res) => {
    const userId = req.params.userId;
    if (!userId) return res.status(400).json("Cart ID required!");
    try {
      const foundCart = await Cart.findOne({ userId: userId });
      if (!foundCart) return res.status(404).json("Cart not found!");
      res.status(200).json(foundCart);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

// GET ALL USER CARTS => only for admin
router.get("/allcarts", verifyTokenAndAdmin, async (req, res) => {
  try {
    const allCarts = await Cart.find();
    if (!allCarts) return res.status(404).json("No cart to show!");
    res.status(200).json(allCarts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
