import mongoose from "mongoose";
import TableModel from "../models/TableModel.js";

const AddTable = async (data) => {
  try {
    const table = new TableModel({
      number:  3 || data.number ,
      capacity:  4 || data.capacity,
      status: false,
    });
    await table.save();
    return table;
  } catch (error) {
    console.error(error);
  }
};


export {
    AddTable
}
