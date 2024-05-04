// enrollmentRoutes.js
const express = require("express");
const router = express.Router();
const enrollmentController = require("../controllers/enrollmentController");
const { verifyToken } = require("../utils/jwtUtils");

// POST endpoint for creating enrollment
router.post("/", verifyToken, enrollmentController.createEnrollment);

// GET endpoint to retrieve enrollments by userID
router.get("/:userId", verifyToken, enrollmentController.getEnrollmentsByUserId);

// DELETE endpoint to deactivate enrollment
router.delete("/:enrollmentId", verifyToken, enrollmentController.deactivateEnrollment);

module.exports = router;
