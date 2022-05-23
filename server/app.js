require("dotenv").config();
const express = require("express");
const app = express();

// Middlewares
app.use(express.json());

// Routers
app.use("/api/user", require("./routers/users"));

app.listen("4000", () => {
	console.log("Server started on port : 4000");
});
