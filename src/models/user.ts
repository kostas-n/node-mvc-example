import { throws } from "assert";

// var mongoose = require('mongoose');

// //Define a schema
// var Schema = mongoose.Schema;

// var UserSchema = new Schema({
// 	fullname: String,
// 	email: String,
// 	password: String
// });

// export var User = mongoose.model('User', UserSchema);
export class User{
	fullname: String;
	email: String;
	password: String;
};
