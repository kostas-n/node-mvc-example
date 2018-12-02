import * as jwt from "jsonwebtoken";
import * as passport from "passport";
// import moment from "moment";
import { Strategy, ExtractJwt } from "passport-jwt";
// import { model as User, IUser } from "../models/user";

class Auth {
	// public initialise = () => {
	// 	this.genToken();
	// }

	// public authenticate = (callback) => passport.authenticate("jwt", { session: false, failWithError: true }, callback);

	// private genToken = (): Object => {
	// 	let expires = moment().utc().add({ days: 7 }).unix();
	// 	let token = jwt.sign({foo: 'bar'}, 'fnsdf hsdo');

	// 	return {
	// 		token: "JWT " + token,
	// 		expires: moment.unix(expires).format(),
	// 		// user: user._id
	// 	};
	// }
}

export default new Auth();