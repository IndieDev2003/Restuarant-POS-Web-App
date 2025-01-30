import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    address: { type: String },
    phone:{ type: Number, required: true}
});

const CustomerModel = mongoose.model('Customer', CustomerSchema);

export default CustomerModel;