const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const productController = require('../../Controllers/ProductController/productController');

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Routes
router.post('/', upload.single('image'), productController.addProduct);  // Add product
router.get('/', productController.getProducts);                         // Get all products
router.get('/:id', productController.getProductById);                   // Get product by ID
router.delete('/:id', productController.deleteProduct);                 // Delete product by ID

module.exports = router;
