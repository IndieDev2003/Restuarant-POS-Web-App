For generating API documentation, it's essential to provide clear and concise details about each endpoint, including its purpose, request parameters, responses, and any potential errors. Below is an example of API documentation for the provided functions using a common format (Markdown) which can be used in README files or API documentation tools like Swagger.

---

# Customer API Documentation

## Add Customer

### Endpoint
`POST /api/customers`

### Description
Add a new customer to the database.

### Request Body
| Field   | Type   | Required | Description              |
|---------|--------|----------|--------------------------|
| name    | String | Yes      | Name of the customer     |
| email   | String | Yes      | Email of the customer    |
| phone   | String | Yes      | Phone number of the customer |
| address | String | Yes      | Address of the customer  |

### Responses
- **201 Created**: Customer added successfully.
  ```json
  {
    "success": true,
    "customer": {
      "_id": "customer_id",
      "name": "Customer Name",
      "email": "customer@example.com",
      "phone": "1234567890",
      "address": "Customer Address"
    }
  }
  ```
- **400 Bad Request**: Missing required fields or customer already exists.
  ```json
  {
    "success": false,
    "message": "Please provide all details"
  }
  ```
  ```json
  {
    "success": false,
    "message": "User already exists"
  }
  ```
- **400 Bad Request**: Server error.
  ```json
  {
    "success": false,
    "message": "Error message"
  }
  ```

---

## Delete Customer

### Endpoint
`DELETE /api/customers`

### Description
Delete a customer from the database.

### Request Body
| Field | Type   | Required | Description         |
|-------|--------|----------|---------------------|
| id    | String | Yes      | ID of the customer  |

### Responses
- **200 OK**: Customer deleted successfully.
  ```json
  {
    "success": true,
    "message": "Customer deleted successfully"
  }
  ```
- **400 Bad Request**: Customer not found or server error.
  ```json
  {
    "success": false,
    "message": "Customer not found"
  }
  ```
  ```json
  {
    "success": false,
    "message": "Error message"
  }
  ```

---

## List All Customers

### Endpoint
`GET /api/customers`

### Description
Retrieve a list of all customers.

### Responses
- **200 OK**: List of customers retrieved successfully.
  ```json
  {
    "success": true,
    "customers": [
      {
        "_id": "customer_id",
        "name": "Customer Name",
        "email": "customer@example.com",
        "phone": "1234567890",
        "address": "Customer Address"
      },
      ...
    ]
  }
  ```
- **400 Bad Request**: Server error.
  ```json
  {
    "success": false,
    "message": "Error message"
  }
  ```

---

## Update Customer

### Endpoint
`PUT /api/customers`

### Description
Update an existing customer's details.

### Request Body
| Field   | Type   | Required | Description              |
|---------|--------|----------|--------------------------|
| id      | String | Yes      | ID of the customer       |
| name    | String | Yes      | Name of the customer     |
| email   | String | Yes      | Email of the customer    |
| phone   | String | Yes      | Phone number of the customer |
| address | String | Yes      | Address of the customer  |

### Responses
- **200 OK**: Customer updated successfully.
  ```json
  {
    "success": true,
    "message": "Customer updated successfully"
  }
  ```
- **400 Bad Request**: Missing required fields, customer not found, or server error.
  ```json
  {
    "success": false,
    "message": "Please provide all details"
  }
  ```
  ```json
  {
    "success": false,
    "message": "Customer not found"
  }
  ```
  ```json
  {
    "success": false,
    "message": "Error message"
  }
  ```

---

### Notes:
- Ensure that the `CustomerModel` is correctly imported and the paths are accurate.
- Always handle errors appropriately in production environments to avoid exposing sensitive information.
