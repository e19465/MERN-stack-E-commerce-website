const Product = require("../models/Product");
const { verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();

// CREATE PRODUCT - ONLY ADMIN
router.post("/createproduct", verifyTokenAndAdmin, async (req, res) => {
  if (!req.body) {
    return res.status(400).json("Product details must be provided!");
  }
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE PRODUCT - ONLY ADMIN
router.put("/updateproduct/:id", async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).json("Product ID required!");

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE PRODUCT - ALLOWED ONLY TO ADMIN
router.delete("/deleteproduct/:id", verifyTokenAndAdmin, async (req, res) => {
  const id = req.params.id;
  if (!id) return res.status(400).json("Product ID required!");

  try {
    const foundProduct = await Product.findById(id);
    if (!foundProduct) return res.status(404).json("Product not found!");
    await Product.deleteOne(foundProduct);
    res.status(200).json("Product has been deleted successfully!");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET PRODUCT
router.get("/getproduct/:id", verifyTokenAndAdmin, async (req, res) => {
  const id = req.params.id;
  try {
    if (!id) return res.status(400).json("Product ID must be provided!");
    const foundProduct = await Product.findById(id);
    if (!foundProduct) return res.status(404).json("Product not found!");
    res.status(200).json(foundProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL PRODUCTS
router.get("/allproducts", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let allProducts = await Product.find();
    if (!allProducts) return res.status(404).json("No products to show.");

    if (qNew) {
      allProducts = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
      allProducts = await Product.find({
        categories: {
          $in: [qCategory],
        },
      });
    }
    res.status(200).json(allProducts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
