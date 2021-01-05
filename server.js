const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const path = require("path");
const cors = require("cors");

// Creating app with express
const app = express();

// Add cors
app.use(cors());

// Express config
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Register ROUTES
app.use("/api/auth", require("./routes/api/auth/auth"));
app.use("/api/tasks", require("./routes/api/tasks/tasks"));
app.use("/api/transactions", require("./routes/api/money/transactions"));

// Getting PORT
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Start Function
function start() {
  try {
    mongoose.connect(
      process.env.MONGODB_URI || config.get("mongoUri"),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      },
      () => console.log("MongoDB Connected...")
    );
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
  } catch (e) {
    console.log(`Server Error`, e.message);
    process.exit(1);
  }
}

start();
