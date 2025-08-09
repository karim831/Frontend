# Flask Backend Server

A robust Flask REST API server for managing subscribers, pricing plans, and discount requests with comprehensive validation and JSON file storage.

## 📁 Project Structure

```
BackEnd/
├── app.py                 # Main Flask application
├── subscribers.json       # Subscriber data storage
├── pricing-plans.json     # Pricing plans data storage
├── discounts.json         # Discount requests data storage
├── requirements.txt       # Python dependencies
└── README.md             # This file
```

## 🚀 Quick Start

### Prerequisites

- Python 3.7 or higher
- pip package manager

### Installation

1. **Clone the repository and navigate to backend:**
   ```bash
   cd BackEnd/
   ```

2. **Create a virtual environment (recommended):**
   ```bash
   python -m venv venv
   
   # Activate virtual environment
   # On Windows:
   venv\Scripts\activate
   
   # On macOS/Linux:
   source venv/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the server:**
   ```bash
   python app.py
   ```

The server will start at `http://localhost:8080`

## 📦 Dependencies

Create a `requirements.txt` file with the following dependencies:

```txt
Flask==2.3.3
Flask-CORS==4.0.0
```

### Dependency Details

- **Flask (2.3.3)**: Core web framework for building the REST API
- **Flask-CORS (4.0.0)**: Handles Cross-Origin Resource Sharing for frontend integration

## 🛠 API Endpoints

### Subscribers

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `GET` | `/subscribers` | Get all subscribers | - |
| `POST` | `/subscribers` | Add new subscriber | `{"email": "user@example.com"}` |
| `DELETE` | `/subscribers/<email>` | Remove subscriber | - |

### Pricing Plans

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `GET` | `/pricing-plans` | Get all pricing plans | - |
| `GET` | `/pricing-plans/<plan_type>` | Get specific plan | - |
| `POST` | `/pricing-plans` | Add new pricing plan | See schema below |
| `PUT` | `/pricing-plans/<plan_type>` | Update pricing plan | See schema below |
| `DELETE` | `/pricing-plans/<plan_type>` | Delete pricing plan | - |

#### Pricing Plan Schema
```json
{
  "type": "basic",
  "img": "image_url.png",
  "price": 29.99,
  "period": "month",
  "infos": ["Feature 1", "Feature 2", "Feature 3"]
}
```

### Discounts

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| `POST` | `/discounts` | Submit discount request | See schema below |

#### Discount Request Schema
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "description": "Discount request description"
}
```

## ✅ Validation Features

### Email Validation
- Proper email format using regex pattern
- Prevents empty or invalid emails
- Duplicate email prevention

### Phone Validation
- Accepts 10-15 digit phone numbers
- Optional '+' prefix for international numbers
- Flexible formatting (accepts spaces, dashes, parentheses)
- Examples: `01290321812`, `+201290321812`, `(012) 903-21812`

### Name Validation
- No numbers allowed in names
- Prevents fake entries with numeric characters

### Data Sanitization
- Automatic whitespace trimming
- Required field validation
- Empty field detection

## 📄 Data Storage

The server uses JSON files for data persistence:

### subscribers.json
```json
{
  "emails": ["user1@example.com", "user2@example.com"],
  "lastUpdated": "2025-08-09T15:30:45.123456",
  "totalSubscribers": 2
}
```

### pricing-plans.json
```json
[
  {
    "type": "basic",
    "img": "basic-plan.png",
    "price": 29.99,
    "period": "month",
    "infos": ["10GB Storage", "Basic Support", "1 Domain"]
  }
]
```

### discounts.json
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "description": "Request for bulk pricing discount",
    "submittedAt": "2025-08-09T15:30:45.123456"
  }
]
```

## 🔧 Configuration

### CORS Setup
The server is configured to allow cross-origin requests from your Angular frontend application.

### Server Configuration
- **Host**: `localhost`
- **Port**: `8080`
- **Debug Mode**: Enabled (disable for production)

### Environment Variables (Optional)
```bash
FLASK_ENV=development
FLASK_DEBUG=1
PORT=8080
```

## 🚦 Error Handling

The API returns appropriate HTTP status codes and error messages:

- `200`: Success
- `201`: Created successfully
- `400`: Bad request (validation errors)
- `404`: Resource not found
- `500`: Internal server error

Example error response:
```json
{
  "error": "Invalid email format"
}
```

## 🧪 Testing the API

### Using curl

**Add subscriber:**
```bash
curl -X POST http://localhost:8080/subscribers \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
```

**Get subscribers:**
```bash
curl http://localhost:8080/subscribers
```

**Submit discount request:**
```bash
curl -X POST http://localhost:8080/discounts \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com", 
    "phone": "+1234567890",
    "description": "Looking for a discount on annual plans"
  }'
```

## 🔒 Security Features

- Input validation and sanitization
- Email format verification
- Phone number format validation
- Duplicate prevention
- Error message standardization
- CORS protection

## 🚀 Production Deployment

For production deployment, consider:

1. **Disable debug mode:**
   ```python
   app.run(host='0.0.0.0', port=8080, debug=False)
   ```

2. **Use a production WSGI server:**
   ```bash
   pip install gunicorn
   gunicorn -w 4 -b 0.0.0.0:8080 app:app
   ```

3. **Environment variables for sensitive data**
4. **Database integration instead of JSON files**
5. **Authentication and authorization**
6. **Rate limiting**
7. **SSL/HTTPS configuration**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request
