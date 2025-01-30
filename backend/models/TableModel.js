import mongoose from "mongoose";

const TableSchema = mongoose.Schema({
  number: { type: Number, required: true },
  capacity: { type: Number, required: true },
  status: { type: Boolean, required: true, default: false },
  premium: { type: Boolean, required: true, default: false },
  

});

const TableModel = mongoose.model("Table", TableSchema);


export default TableModel;