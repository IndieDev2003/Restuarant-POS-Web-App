import express from "express";
import OrderModel from "../../models/OrderModel.js";
import TableModel from "../../models/TableModel.js";

export const Order = (req, res) => {
    return res.send("Order Controller");
}

export const PlaceOrder = async (req, res) => {

    const { customerId, tableId, items,total,paid } = req.body;
    if (!customerId || !tableId||!total||!paid ||!items ) return res.status(400).send({ success:false,message:"All Fields are required"})
    try {
        const table = await TableModel.findById(tableId);
        if (!table) return res.status(404).send({ success: false, message: "Table not found" })
        if (table.status) return res.status(409).send({ success: false, message: "Table is already occupied or Already processing" })
        const order = await new OrderModel({ customer:customerId, table:tableId, orderItems:items,total,paid })
        
        // table.status = true;
        // table.save();
        await order.save();
        
        return res.status(200).send({ success: true, message: "Order Placed successfully" });
        
    } catch (error) {
        console.error(error);
        return res.status(404).send({ success:false,message: error.message });
    }
}

export const deleteOrder = async (req, res) => { 
    const { id } = req.body;
    try {
        const order = await OrderModel.findByIdAndDelete(id);
        if (!order) return res.status(404).json({ success: false, message: "Order not found/Invalid Order ID" });
        return res.status(200).json({ success: true, message: "Order deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
}

export const ListAllOrders = async (req, res) => {
    try {
        const orders = await OrderModel.find();
        return res.status(200).send({ success: true, orders });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
}
 
export const GetOrderById = async (req, res) => { 
    const { id } = req.body;
    try {
        const order = await OrderModel.findById(id);
        if (!order) return res.status(404).json({ success: false, message: "Order not found/Invalid Order ID" });
        return res.status(200).json({ success: true, order });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
}