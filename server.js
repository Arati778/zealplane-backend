const express = require("express");
const dotenv = require("dotenv").config();
const contactsRoutes = require("./contactsRoutes");
const userRoutes = require("./userRoutes");
const errorHandler = require("./midleware/errorhandler");
const connectDb = require("./config/dbConnection");
const cors = require("cors");
const projectRoutes = require('./routes/projectRoutes');

connectDb();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

const port = process.env.PORT || 5000;

// Use the contactsRoutes for the /api/contacts endpoint
app.use("/api/contacts", contactsRoutes);
app.use("/api/users", userRoutes);
app.use('/api/projects', projectRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
