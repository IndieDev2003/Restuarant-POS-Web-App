Here is the API documentation for the provided functions using a common format (Markdown), which can be used in README files or API documentation tools like Swagger.

---

# Table API Documentation

## Table Controller

### Endpoint
`GET /api/table`

### Description
Returns a simple response indicating the Table Controller.

### Responses
- **200 OK**
  ```json
  {
    "message": "Table Controller"
  }
  ```

---

## Add Table

### Endpoint
`POST /api/table`

### Description
Add a new table to the database.

### Request Body
| Field        | Type    | Required | Description                |
|--------------|---------|----------|----------------------------|
| tableNumber  | Number  | Yes      | Number of the table        |
| capacity     | Number  | Yes      | Capacity of the table      |
| status       | Boolean | Yes      | Status of the table        |
| premium      | Boolean | No       | Whether table is premium   |

### Responses
- **201 Created**: Table added successfully.
  ```json
  {
    "success": true,
    "message": "Table added successfully"
  }
  ```
- **400 Bad Request**: Missing required fields or table number already exists.
  ```json
  {
    "success": false,
    "message": "All fields are required"
  }
  ```
  ```json
  {
    "success": false,
    "message": "Table number already exists"
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

## List Tables

### Endpoint
`GET /api/tables`

### Description
Retrieve a list of all tables.

### Responses
- **200 OK**: List of tables retrieved successfully.
  ```json
  {
    "success": true,
    "tables": [
      {
        "_id": "table_id",
        "number": "tableNumber",
        "capacity": "capacity",
        "status": "status",
        "premium": "premium"
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

## Update Table Status

### Endpoint
`PUT /api/table/status`

### Description
Update the status of an existing table.

### Request Body
| Field       | Type    | Required | Description                |
|-------------|---------|----------|----------------------------|
| tableNumber | Number  | Yes      | Number of the table        |
| status      | Boolean | Yes      | New status of the table    |

### Responses
- **200 OK**: Table status updated successfully.
  ```json
  {
    "success": true,
    "message": "Table status updated successfully",
    "table": {
      "_id": "table_id",
      "number": "tableNumber",
      "capacity": "capacity",
      "status": "status",
      "premium": "premium"
    }
  }
  ```
- **400 Bad Request**: Missing required fields.
  ```json
  {
    "success": false,
    "message": "Table number and status are required"
  }
  ```
- **404 Not Found**: Table not found.
  ```json
  {
    "success": false,
    "message": "Table not found"
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

## Delete Table

### Endpoint
`DELETE /api/table`

### Description
Delete an existing table.

### Request Body
| Field       | Type   | Required | Description                |
|-------------|--------|----------|----------------------------|
| tableNumber | Number | Yes      | Number of the table        |

### Responses
- **200 OK**: Table deleted successfully.
  ```json
  {
    "success": true,
    "message": "Table Deleted successfully"
  }
  ```
- **400 Bad Request**: Table not found.
  ```json
  {
    "success": false,
    "message": "Table not found"
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
- Ensure that the `TableModel` is correctly imported and the paths are accurate.
- Always handle errors appropriately in production environments to avoid exposing sensitive information.

This documentation provides a clear overview of each endpoint, what it does, the expected request body, and possible responses. You can use this format as a basis and customize it further according to your project's needs.