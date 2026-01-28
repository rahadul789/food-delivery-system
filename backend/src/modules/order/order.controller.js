const Order = require("./order.model");

exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create({
      customer: req.user.id,
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find()
    .populate("customer", "name role")
    .populate("deliveryMan", "name role");

  res.json(orders);
};
