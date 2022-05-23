const {
	createUserQuery,
	getUsersQuery,
	updateUserQuery,
	deleteUserQuery,
} = require("../database/queries/users");

module.exports.getAllUsers = () => {
	return new Promise((resolve, reject) => {
		try {
			getUsersQuery()
				.then((res) => {
					return resolve(res);
				})
				.catch((err) => {
					return reject(err);
				});
		} catch (error) {
			return reject(error.message);
		}
	});
};

module.exports.createUser = (data) => {
	return new Promise((resolve, reject) => {
		try {
			createUserQuery(data)
				.then((res) => {
					return resolve(res);
				})
				.catch((err) => {
					return reject(err);
				});
		} catch (error) {
			return reject(error.message);
		}
	});
};

module.exports.updateUser = (data) => {
	return new Promise((resolve, reject) => {
		try {
			updateUserQuery(data)
				.then((res) => {
					return resolve(res);
				})
				.catch((err) => {
					return reject(err);
				});
		} catch (error) {
			return reject(error.message);
		}
	});
};

module.exports.deleteUser = (data) => {
	return new Promise((resolve, reject) => {
		try {
			deleteUserQuery(data)
				.then((res) => {
					return resolve(res);
				})
				.catch((err) => {
					return reject(err);
				});
		} catch (error) {
			return reject(error.message);
		}
	});
};
