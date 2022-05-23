const express = require("express");
const router = express.Router();

const userController = require("../controllers/users");

// Get all users API
router.get("/get-all-users", (req, res) => {
	console.log("New request : Get all Users");
	userController
		.getAllUsers()
		.then((data) => {
			return res.send({
				status: true,
				data,
				message: "Users Fetched",
			});
		})
		.catch((err) => {
			return res.send({
				status: false,
				data: null,
				message: err,
			});
		});
});

// Create new user API
router.post("/create-user", (req, res) => {
	userController
		.createUser(req.body)
		.then((data) => {
			return res.send({
				status: true,
				data,
				message: "User created",
			});
		})
		.catch((err) => {
			return res.send({
				status: false,
				data: null,
				message: err,
			});
		});
});

// Update user API
router.post("/update-user", (req, res) => {
	userController
		.updateUser(req.body)
		.then((data) => {
			return res.send({
				status: true,
				data,
				message: "User updated",
			});
		})
		.catch((err) => {
			return res.send({
				status: false,
				data: null,
				message: err,
			});
		});
});

// Delete user API
router.delete("/remove-user", (req, res) => {
	userController
		.deleteUser(req.body)
		.then((data) => {
			return res.send({
				status: true,
				data,
				message: "User deleted",
			});
		})
		.catch((err) => {
			return res.send({
				status: false,
				data: null,
				message: err,
			});
		});
});

module.exports = router;
