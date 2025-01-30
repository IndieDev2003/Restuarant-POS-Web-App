import express from 'express';
import { addItem, deleteItem, getAllItems, Item, updateItem } from '../controllers/item.controller.js';

const ItemRouter = express.Router();

ItemRouter.get('/', Item)
ItemRouter.post('/add-item',addItem)
ItemRouter.get('/list-items', getAllItems)
ItemRouter.delete('/delete-item', deleteItem)
ItemRouter.post('/update-item', updateItem)


export default ItemRouter;