const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const enrollmentRoutes = require("../Enrollment-Service/models/enrollmentModel");

const app = express();

const PORT = process.env.PORT || 3000;
const DB_URI = "mongodb+srv://thuwa:thuwa123@enroll-service.lnrwv2v.mongodb.net/";

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the Database");
  })
  .catch((err) => {
    console.log("Error connecting to the database:", err);
  });

// Routes
app.use("/api/enroll", enrollmentRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});

module.exports = app;
