import express from "express";
import { PlaceOrder,Order, ListAllOrders, GetOrderById, deleteOrder } from "../controllers/order.controllers.js";

const OrderRouter = express.Router();

OrderRouter.get('/',Order)
OrderRouter.post('/place-order', PlaceOrder)
OrderRouter.get('/list-orders', ListAllOrders)
OrderRouter.get('/get-order', GetOrderById)
OrderRouter.delete('/delete-order', deleteOrder)

export default OrderRouter;