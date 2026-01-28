const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const routes = require("./routes");
const errorMiddleware = require("./middlewares/error.middleware");

const app = express();

// connect to database
connectDB();

// Global middlewares
// cors
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);
app.use(express.json());

// Routes
app.use("/api", routes);
app.use("/auth", require("./modules/auth/auth.routes"));
app.use("/orders", require("./modules/order/order.routes"));

// Error handler (always last)
app.use(errorMiddleware);

module.exports = app;
