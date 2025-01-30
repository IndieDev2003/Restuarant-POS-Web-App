Here is the API documentation for the provided functions using a common format (Markdown), which can be used in README files or API documentation tools like Swagger.

---

# Order API Documentation

## Order Controller

### Endpoint
`GET /api/order`

### Description
Returns a simple response indicating the Order Controller.

### Responses
- **200 OK**
  ```json
  {
    "message": "Order Controller"
  }
  ```

---

## Place Order

### Endpoint
`POST /api/order`

### Description
Place a new order.

### Request Body
| Field     | Type    | Required | Description                          |
|-----------|---------|----------|--------------------------------------|
| customerId| String  | Yes      | ID of the customer                   |
| tableId   | String  | Yes      | ID of the table                      |
| items     | Array   | Yes      | List of items in the order           |
| total     | Number  | Yes      | Total price of the order             |
| paid      | Boolean | Yes      | Payment status of the order          |

### Responses
- **200 OK**: Order placed successfully.
  ```json
  {
    "success": true,
    "message": "Order Placed successfully"
  }
  ```
- **400 Bad Request**: Missing required fields.
  ```json
  {
    "success": false,
    "message": "All fields are required"
  }
  ```
- **404 Not Found**: Table not found.
  ```json
  {
    "success": false,
    "message": "Table not found"
  }
  ```
- **409 Conflict**: Table is already occupied or processing.
  ```json
  {
    "success": false,
    "message": "Table is already occupied or Already processing"
  }
  ```
- **500 Internal Server Error**: Server error.
  ```json
  {
    "success": false,
    "message": "Error message"
  }
  ```

---

## Delete Order

### Endpoint
`DELETE /api/order`

### Description
Delete an existing order.

### Request Body
| Field | Type   | Required | Description         |
|-------|--------|----------|---------------------|
| id    | String | Yes      | ID of the order     |

### Responses
- **200 OK**: Order deleted successfully.
  ```json
  {
    "success": true,
    "message": "Order deleted successfully"
  }
  ```
- **404 Not Found**: Order not found or invalid Order ID.
  ```json
  {
    "success": false,
    "message": "Order not found/Invalid Order ID"
  }
  ```
- **500 Internal Server Error**: Server error.
  ```json
  {
    "success": false,
    "message": "Server Error"
  }
  ```

---

## List All Orders

### Endpoint
`GET /api/orders`

### Description
Retrieve a list of all orders.

### Responses
- **200 OK**: List of orders retrieved successfully.
  ```json
  {
    "success": true,
    "orders": [
      {
        "_id": "order_id",
        "customer": "customer_id",
        "table": "table_id",
        "orderItems": [ ... ],
        "total": 100,
        "paid": true
      },
      ...
    ]
  }
  ```
- **500 Internal Server Error**: Server error.
  ```json
  {
    "success": false,
    "message": "Server Error"
  }
  ```

---

## Get Order by ID

### Endpoint
`POST /api/order/details`

### Description
Retrieve details of an order by ID.

### Request Body
| Field | Type   | Required | Description         |
|-------|--------|----------|---------------------|
| id    | String | Yes      | ID of the order     |

### Responses
- **200 OK**: Order details retrieved successfully.
  ```json
  {
    "success": true,
    "order": {
      "_id": "order_id",
      "customer": "customer_id",
      "table": "table_id",
      "orderItems": [ ... ],
      "total": 100,
      "paid": true
    }
  }
  ```
- **404 Not Found**: Order not found or invalid Order ID.
  ```json
  {
    "success": false,
    "message": "Order not found/Invalid Order ID"
  }
  ```
- **500 Internal Server Error**: Server error.
  ```json
  {
    "success": false,
    "message": "Server Error"
  }
  ```

---

### Notes:
- Ensure that the `OrderModel` and `TableModel` are correctly imported and the paths are accurate.
- Always handle errors appropriately in production environments to avoid exposing sensitive information.

This documentation provides a clear overview of each endpoint, what it does, the expected request body, and possible responses. You can use this format as a basis and customize it further according to your project's needs.