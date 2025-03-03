# 🛠️ InspireBox - Backend

This is the backend repository for InspireBox, a web application that helps users store, manage, and retrieve random motivational messages.

## 🚀 Features
- User authentication (JWT-based).
- CRUD operations for motivational messages.
- Secure API with authentication and authorization.
- Database integration with MongoDB.

## 🛠️ Tech Stack
- **Backend Framework**: Node.js with Express.js
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Token)
- **Environment Management**: dotenv
- **CORS Handling**: cors

## 📦 Installation
### 1️⃣ Clone the repository
```bash
git clone https://github.com/tanphat0226/message_box_be.git
cd message_box_be
```
### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Set up the environment variables
Create a .env file in the root directory and add the following:

```bash
PORT=5055

DB_USER=your_database_user
DB_HOST=your_database_host
DB_NAME=your_database_name
DB_PASSWORD=your_database_password
DB_PORT=5432

JWT_SECRET_KEY=your_jwt_secret_key
BUILD_MODE=prod  # Change to "dev" for development mode
```

Replace your_mongodb_connection_string and your_jwt_secret with actual values.
### 4️⃣ Start the server
```bash
npm start
```
The server should now be running on `http://localhost:5000`.

## 🔥 API Endpoints
| Method | Endpoint             | Description               |
|--------|----------------------|---------------------------|
| POST   | `/v1/auth/signup`   | User registration         |
| POST   | `/v1/auth/login`    | User login                |
| GET    | `/v1/messages`      | Get all messages          |
| POST   | `/v1/messages`      | Add a new message         |
| PUT    | `/v1/messages/:id`  | Update an existing message |
| DELETE | `/v1/messages/:id`  | Delete a message          |

## 🚀 Deployment
To deploy on a production server:
```bash
npm run build
```
## 🤝 Contribution
Feel free to contribute by opening issues or pull requests. Any feedback is appreciated!

## 📄 License
This project is open-source and available under the MIT License.
