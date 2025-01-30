// import { TypeFormatFlags } from "typescript";
// import connectDB from "./config/database.js";
// import { AddUser } from "./database/AddUser.js";
// // import { AddOrder } from "./database/Order.js";
// import AddOrder, { updateOrder }  from "./database/Order.js";
// import { AddTable } from "./database/Table.js";

// const userDummy = {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     password: "password123",
//     phone: 123456789,
//     address: "123 Main Street",
// }

// const dummyOrder = {
//   orderItems: [
//     { id: 1, name: "Pizza", price: 10.99 },
//     { id: 2, name: "Burger", price: 8.99 },
//     { id: 3, name: "Pasta", price: 12.99 },
//   ],
//   paid: true,
//   total: 32.97,
// };

// const dummyTable = {
//     table: 24,
//     occupied: false,
//     chairs:12
// }


// await connectDB();
// // await AddUser(userDummy);
// // await AddTable();
// // await AddOrder()
// // await updateOrder("6798a4040883d19b91e9dff7", dummyOrder);
// console.log("Hello")



import express from "express";
import 'dotenv/config';
import connectDB from "./config/database.js";
import CustomerRouter from "./express/routes/customer.routes.js";
import TableRouter from "./express/routes/table.routes.js";
import OrderRouter from "./express/routes/order.routes.js";
import ItemRouter from "./express/routes/item.routes.js";

const port = process.env.PORT || 3000;


await connectDB();

const app = express();
app.use(express.json());

// app.use(express.urlencoded());


app.get("/", (req, res) => { 
  res.send("Hello World!");
})

app.use('/customers',CustomerRouter)
app.use('/orders',OrderRouter)
app.use('/tables', TableRouter)
app.use('/items',ItemRouter)


app.listen(port, () => console.log(`Server running on port:${port}`));