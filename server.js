const express = require("express");
const app = express();
const connectDB = require("./config/db");

connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ msg: "Hello Node" }));

// Define Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at ${PORT}...`));
