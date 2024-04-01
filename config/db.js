const mongoose = require("mongoose");
require("dotenv").config();

const db = process.env.mongoURI;

mongoose.set("strictQuery", false);

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
		});
		// Async await used
		console.log("MongoDB Connected...");
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;
