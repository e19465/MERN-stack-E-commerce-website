const Order = require("../models/Order");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();

// CREATE ORDER
router.post("/createorder", async (req, res) => {
  const body = req.body;
  if (!body) return res.status(400).json("Insufficient details!");
  const newOrder = new Order(body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE ORDER => only for admin
router.put("/updateorder/:orderId", verifyTokenAndAdmin, async (req, res) => {
  const orderId = req.params.orderId;
  if (!orderId) return res.status(400).json("Order ID required!");
  try {
    const foundOrder = await Order.findById(orderId);
    if (!foundOrder) return res.status(404).json("Order not found!");
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE ORDER => ONLY ADMIN
router.delete("/deleteorder/:id", verifyTokenAndAdmin, async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).json("Order ID required!");
  try {
    const foundOrder = await Order.findById(id);
    if (!foundOrder) return res.status(404).json("Order not found!");
    await Order.findByIdAndDelete(id);
    res.status(200).json("Order has been deleted successfully!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ORDER => ONLY FOR ADMIN
router.get("/getorder/:orderId", verifyTokenAndAdmin, async (req, res) => {
  const id = req.params.orderId;
  if (!id) return res.status(400).json("Order ID required!");
  try {
    const foundOrder = await Order.findById(id);
    if (!foundOrder) return res.status(404).json("Order not found!");
    return res.status(200).json(foundOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ORDERS => FOR USER
router.get(
  "/getuserorder/:userId",
  verifyTokenAndAuthorization,
  async (req, res) => {
    const userId = req.params.userId;
    if (!userId) return res.status(400).json("User ID required!");
    try {
      const foundOrders = await Order.find({ userId: userId });
      if (!foundOrders) return res.status(404).json("No orders found!");
      res.status(200).json(foundOrders);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

// GET ALL ORDERS
router.get("/allorders", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    let allOrders;
    if (query) {
      allOrders = await Order.find().sort({ createdAt: -1 }).limit(2);
    } else {
      allOrders = await Order.find();
    }
    if (!allOrders) return res.status(404).json("No orders found!");
    res.status(200).json(allOrders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET MONTHLY INCOME => ONLY FOR ADMIN
router.get("/income", async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    console.log("object");
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    console.log("x  ");
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
