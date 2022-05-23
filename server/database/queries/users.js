const connection = require("../connection");
const uniqid = require("uniqid");

module.exports.createUserQuery = ({ name, email, password }) => {
	return new Promise((resolve, reject) => {
		try {
			let id = uniqid();
			const query =
				"INSERT INTO users(id, name, email, password) VALUES($1, $2, $3, $4)";
			const values = [id, name, email, password];
			connection.query(query, values, (err, res) => {
				if (err) {
					if (err.code && err.code === "23505") {
						return reject("Email already exists!");
					}
					return reject(err.detail);
				}
				return resolve();
			});
		} catch (error) {
			console.log("Error => ", error);
			return reject(error.message);
		}
	});
};

module.exports.getUsersQuery = () => {
	return new Promise((resolve, reject) => {
		try {
			let query = "SELECT id, name, email FROM users";
			connection.query(query, (err, res) => {
				if (err) {
					return reject(err.detail);
				}
				return resolve({ users: res.rows, total: res.rowCount });
			});
		} catch (error) {
			console.log("Error => ", error);
			return reject(error.message);
		}
	});
};

module.exports.updateUserQuery = ({ id, updateData }) => {
	return new Promise((resolve, reject) => {
		try {
			let updateValues = "";
			const values = [];
			for (let key in updateData) {
				updateValues += ` ${key} = '${updateData[key]}',`;
			}
			updateValues = updateValues.slice(0, -1);
			let query = `UPDATE users SET${updateValues} WHERE id = '${id}'`;
			console.log("query", query);
			connection.query(query, values, (err, res) => {
				console.log(err, res);
				if (err) {
					return reject(err.detail);
				}
				return resolve();
			});
		} catch (error) {
			console.log("Error => ", error);
			return reject(error.message);
		}
	});
};

module.exports.deleteUserQuery = ({ id }) => {
	return new Promise((resolve, reject) => {
		try {
			const query = `DELETE from users WHERE id = $1`;
			const values = [id];
			connection.query(query, values, (err, res) => {
				console.log(err, res);
				if (err) {
					return reject(err.detail);
				}
				return resolve();
			});
		} catch (error) {
			console.log("Error => ", error);
			return reject(error.message);
		}
	});
};
