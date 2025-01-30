import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description:{type:String, required: false,},
    price: { type: Number, required: true },
    category:{ type: String, required: true},
    image: { type: String, required: false },
});

const ItemModel = mongoose.model("Item", ItemSchema);

export default ItemModel;