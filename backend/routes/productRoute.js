const express = require('express');
const { getAllProduct , createProduct, updateProduct, deleteProduct, getProductDetails} = require('../controller/productController');

const router = express.Router();

// router.route("/products").get(getAllProduct)


//Read the All product list----
router.get('/products',getAllProduct);


//Create route for new product-------
router.route("/product/new").post(createProduct)

//Update the Exist product---------
router.route("/product/:id").put(updateProduct).delete(deleteProduct)

//Get Product detail
router.route('/product/:id').get(getProductDetails)


module.exports = router;