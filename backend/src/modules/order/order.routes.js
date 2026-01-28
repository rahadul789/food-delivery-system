const router = require("express").Router();
const auth = require("../../middlewares/auth.middleware");
const { createOrder, getOrders } = require("./order.controller");

router.post("/", auth, createOrder);
router.get("/", auth, getOrders);

module.exports = router;
