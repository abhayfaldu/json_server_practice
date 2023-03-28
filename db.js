const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";
const dbName = "myproject";

let db;

MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
	if (err) {
		console.log("Failed to connect to MongoDB", err);
		process.exit(1);
	}

	console.log("Connected to MongoDB");

	db = client.db(dbName);
});

module.exports = function () {
	return db;
};
