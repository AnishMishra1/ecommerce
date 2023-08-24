const express = require("express");
const router = express.Router();
const { isAuthenticatedUser,authorizeRoles } = require('../middleware/auth');
const { newOrder, getSingleOrder, myOrders, getAllOrders, updateOrderStatus, deleteOrder } = require("../controller/orderController");


router.route("/order/new").post(isAuthenticatedUser, newOrder);

router
   .route("/order/:id")
   .get(isAuthenticatedUser, getSingleOrder);

router.route("/orders/me").get(isAuthenticatedUser, myOrders);   

router
    .route("/admin/orders")
    .get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);

router
    .route("/admin/order/:id")
    .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrderStatus)
    .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);    





module.exports = router;