import OrderModel from "../models/OrderModel.js";

const AddOrder = async () => {
  try {
    const newOrder = new OrderModel({
      orderItems: [{ id: 1, name: "Pizza", price: 10.99 }],
      paid: false,
      total: 10.99,
      // customer: "John Doe"
    });
    await newOrder.save();
    console.log("Order Created", newOrder);
  } catch (error) {
    console.error(error);
  }
};

const updateOrder = async (orderId, orderData) => {
  try {
    const order = await OrderModel.findByIdAndUpdate(orderId, orderData, {});
    if (!order) return console.error("Order not found");
    console.log("Order Updated", order);
  } catch (error) {
    console.error(error);
  }
};

export { AddOrder, updateOrder };
export default null
