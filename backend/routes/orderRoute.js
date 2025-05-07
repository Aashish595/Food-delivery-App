import express from "express";
import authMiddleware from "../middleware/auth.js";
import * as orderController from "../controllers/orderController.js"; // Cleaner import

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, orderController.placeOrder);
orderRouter.post("/verify", orderController.verifyOrder);
orderRouter.post("/userorders", authMiddleware, orderController.userOrders);
orderRouter.get("/list", orderController.listOrders);
orderRouter.post("/status", orderController.updateStatus);


export default orderRouter;