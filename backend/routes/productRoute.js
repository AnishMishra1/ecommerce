const express = require('express');
const { getAllProduct , createProduct, updateProduct, deleteProduct, getProductDetails} = require('../controller/productController');
const { isAuthenticatedUser,authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.route("/products").get(isAuthenticatedUser,getAllProduct)


//Read the All product list----
// router.get('/products',isAuthenticatedUser,getAllProduct);


//Create route for new product-------
router
.route("/admin/product/new")
.post(isAuthenticatedUser,authorizeRoles("admin"),createProduct)

//Update the Exist product---------
router
.route("/admin/product/:id")
.put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct)
.delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct)

//Get Product detail
router.route('/product/:id').get(getProductDetails)


module.exports = router;