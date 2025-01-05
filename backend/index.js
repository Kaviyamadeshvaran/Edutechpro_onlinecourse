/*const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const DBConnection = require("./config/connect");
const path = require("path");

// Load environment variables from .env file
dotenv.config();

const app = express();

// Database connection
DBConnection();

// Set the server port, defaulting to 5000 if not specified in .env
const PORT = process.env.PORT || 5000;

////// Middleware //////

app.use(
  cors({
    origin: "https://edutechpro-onlinecourse-frontend.onrender.com",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Parse incoming JSON requests
app.use(express.json());

// Serve static files from the uploads directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

/// ROUTES ///
// Define routes for admin and user APIs
app.use("/api/admin", require("./routers/adminRoutes"));
app.use("/api/user", require("./routers/userRoutes"));

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// Load environment variables from .env file
dotenv.config();

// Create the Express app
const app = express();

// Database connection (you can customize this based on your DB configuration)
const DBConnection = require("./config/connect"); // Assuming you have a file to handle DB connection
DBConnection();

// Set the server port, defaulting to 5000 if not specified in .env
const PORT = process.env.PORT || 5000;

// Middleware for CORS
app.use(
  cors({
    origin: "https://edutechpro-onlinecourse-frontend.onrender.com", // Frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Middleware to parse incoming JSON requests
app.use(express.json());

// Serve static files from the "uploads" directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Example route for admin API
const adminRoutes = require("./routers/adminRoutes"); // Assuming you have routes for admin
const userRoutes = require("./routers/userRoutes"); // Assuming you have routes for user

// Use the routes
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
