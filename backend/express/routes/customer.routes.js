import express from "express";
import addCustomer, { deleteCustomer, listAllCustomers, updateCustomer } from "../controllers/customer.controller.js";

const CustomerRouter = express.Router();

CustomerRouter.post("/add", addCustomer)
CustomerRouter.delete("/delete", deleteCustomer)
CustomerRouter.get("/list-customers", listAllCustomers)
CustomerRouter.post("/update", updateCustomer)

export default CustomerRouter;