import express from "express";
import CustomerModel from "../../models/CutomerModel.js";

const addCustomer = async (req, res) => {
  const { name, email, phone, address } = req.body;

  if (!name || !email || !phone || !address)
    return res
      .status(400)
      .json({ success: false, message: "Please provide all details" });

  try {
    // Checking if customer already exists
    const existingCustomer = await CustomerModel.findOne({ email });
    if (existingCustomer)
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    // Creating a new customer
    const customer = await new CustomerModel({
      name: name,
      email: email,
      phone: phone,
      address: address,
    });

    // saving customer into database
    customer.save();

    return res.status(201).json({ success: true, customer });
    // res.send("Customer added successfully");
  } catch (error) {
      console.log(error);
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteCustomer = async (req, res) => {
  const { id } = req.body;

  try {
    const customer = await CustomerModel.findByIdAndDelete(id);
    if (!customer) {
      return res
        .status(400)
        .json({ success: false, message: "Customer not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Customer deleted successfully" });
  } catch (error) {
      console.log(error);
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const listAllCustomers = async (req, res) => {
  try {
    const customers = await CustomerModel.find({});
    return res.status(200).json({ success: true, customers });
  } catch (error) {
      console.log(error);
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const updateCustomer = async (req, res) => {
    const { id, name, email, phone, address } = req.body;
    
    if(!id||!name||!email||!phone||!address) return res.status(400).json({success:false, message:"Please provide all details"});
  try {
    const customer = await CustomerModel.findByIdAndUpdate(id, {
      name,
      email,
      phone,
      address,
    });
    if (!customer) {
      return res
        .status(400)
        .json({ success: false, message: "Customer not found" });
    }
    customer.save();
    return res
      .status(200)
      .json({ success: true, message: "Customer updated successfully" });
  } catch (error) {
      console.log(error);
    return res.status(400).json({ success: false, message: error.message });
  }
};

export default addCustomer;
