import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    orderItems: { type: Array, required: true },
    paid: { type: Boolean, default: false, required: true },
    total: { type: Number, required: true },
    table: { type: mongoose.Schema.Types.ObjectId,ref:"Table", required: true },
    customer: {type: mongoose.Schema.Types.ObjectId,ref: "User",required: true,},
  },
  { minimize: false }
);

const OrderModel = mongoose.model("Order", OrderSchema);

export default OrderModel;