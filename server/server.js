const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Route to log user data
app.post("/log", (req, res) => {
  const { deviceType, browser, timestamp } = req.body;
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress || "Unknown";

  const logEntry = `${timestamp}, ${ip}, ${deviceType}, ${browser}\n`;

  // Append the log entry to a file
  const logFilePath = path.join(__dirname, "user_logs.txt");
  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
      return res.status(500).send("Failed to log user data.");
    }
    res.status(200).send("User data logged successfully.");
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Logging server is running on http://localhost:${PORT}`);
});
