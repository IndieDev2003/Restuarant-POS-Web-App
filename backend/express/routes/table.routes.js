import express from "express";
import { AddTable, DeleteTable, ListTables, Table } from "../controllers/table.controller.js";

const TableRouter = express.Router();

TableRouter.get('/',Table)
TableRouter.post('/add', AddTable)
TableRouter.get('/list-tables', ListTables)
TableRouter.post('/delete', DeleteTable)

export default TableRouter;

