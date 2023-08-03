const express = require('express');
const { getAllProduct , createProduct} = require('../controller/productController');

const router = express.Router();

// router.route("/products").get(getAllProduct)

router.get('/products',getAllProduct);
router.route("/product/new").post(createProduct)


module.exports = router;