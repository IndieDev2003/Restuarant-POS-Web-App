# Restaurant POS Backend

This is the backend service for the Restaurant POS (Point of Sale) system. It handles various functionalities such as managing customers, orders, tables, and items.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Customer Endpoints](#customer-endpoints)
  - [Order Endpoints](#order-endpoints)
  - [Table Endpoints](#table-endpoints)
  - [Item Endpoints](#item-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/restaurant-pos-backend.git
   cd restaurant-pos-backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the necessary environment variables (e.g., database connection strings).

4. Start the server:
   ```sh
   npm start
   ```

## Usage

Once the server is running, you can interact with the API using tools like Postman or via frontend applications.

## API Endpoints

### Customer Endpoints

- **Add Customer**
  - **Endpoint:** `POST /api/customers`
  - **Description:** Add a new customer.
  - **Request Body:**
    ```json
    {
      "name": "Customer Name",
      "email": "customer@example.com",
      "phone": "1234567890",
      "address": "Customer Address"
    }
    ```

- **Delete Customer**
  - **Endpoint:** `DELETE /api/customers`
  - **Description:** Delete a customer.
  - **Request Body:**
    ```json
    {
      "id": "customer_id"
    }
    ```

- **List All Customers**
  - **Endpoint:** `GET /api/customers`
  - **Description:** Retrieve a list of all customers.

- **Update Customer**
  - **Endpoint:** `PUT /api/customers`
  - **Description:** Update an existing customer's details.
  - **Request Body:**
    ```json
    {
      "id": "customer_id",
      "name": "New Customer Name",
      "email": "newcustomer@example.com",
      "phone": "0987654321",
      "address": "New Customer Address"
    }
    ```

### Order Endpoints

- **Place Order**
  - **Endpoint:** `POST /api/order`
  - **Description:** Place a new order.
  - **Request Body:**
    ```json
    {
      "customerId": "customer_id",
      "tableId": "table_id",
      "items": [...],
      "total": 100.0,
      "paid": true
    }
    ```

- **Delete Order**
  - **Endpoint:** `DELETE /api/order`
  - **Description:** Delete an existing order.
  - **Request Body:**
    ```json
    {
      "id": "order_id"
    }
    ```

- **List All Orders**
  - **Endpoint:** `GET /api/orders`
  - **Description:** Retrieve a list of all orders.

- **Get Order by ID**
  - **Endpoint:** `POST /api/order/details`
  - **Description:** Retrieve details of an order by ID.
  - **Request Body:**
    ```json
    {
      "id": "order_id"
    }
    ```

### Table Endpoints

- **Add Table**
  - **Endpoint:** `POST /api/table`
  - **Description:** Add a new table to the database.
  - **Request Body:**
    ```json
    {
      "tableNumber": 1,
      "capacity": 4,
      "status": true,
      "premium": false
    }
    ```

- **List Tables**
  - **Endpoint:** `GET /api/tables`
  - **Description:** Retrieve a list of all tables.

- **Update Table Status**
  - **Endpoint:** `PUT /api/table/status`
  - **Description:** Update the status of an existing table.
  - **Request Body:**
    ```json
    {
      "tableNumber": 1,
      "status": false
    }
    ```

- **Delete Table**
  - **Endpoint:** `DELETE /api/table`
  - **Description:** Delete an existing table.
  - **Request Body:**
    ```json
    {
      "tableNumber": 1
    }
    ```

### Item Endpoints

- **Add Item**
  - **Endpoint:** `POST /api/item`
  - **Description:** Add a new item to the database.
  - **Request Body:**
    ```json
    {
      "name": "Item Name",
      "price": 10.0,
      "category": "Item Category",
      "image": "Image URL",
      "description": "Item Description"
    }
    ```

- **Update Item**
  - **Endpoint:** `PUT /api/item`
  - **Description:** Update an existing item's details.
  - **Request Body:**
    ```json
    {
      "name": "Item Name",
      "price": 15.0,
      "category": "New Item Category",
      "image": "New Image URL",
      "description": "New Item Description"
    }
    ```

- **Delete Item**
  - **Endpoint:** `DELETE /api/item`
  - **Description:** Delete an item from the database.
  - **Request Body:**
    ```json
    {
      "name": "Item Name"
    }
    ```

- **Get All Items**
  - **Endpoint:** `GET /api/items`
  - **Description:** Retrieve a list of all items.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.

## License

This project is licensed under the MIT License.

---

Feel free to customize this README further to match the specifics of your project and any additional details you might want to include.
