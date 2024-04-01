const mongoose = require("mongoose");
const Schema = mongoose.Schema; // Not have to do it just to make it cleaner

const PostSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "users",
	},
	text: {
		type: String,
		required: true,
	},
	name: String,
	avatar: String,
	likes: [
		{
			user: {
				type: Schema.Types.ObjectId,
				ref: "users",
			},
		},
	],
	comments: [
		{
			user: {
				type: Schema.Types.ObjectId,
				ref: "users",
			},
			text: {
				type: String,
				required: true,
			},
			name: String,
			avatar: String,
			date: {
				type: Date,
				default: Date.now,
			},
		},
	],
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Post = mongoose.model("post", PostSchema);
