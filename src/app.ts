import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import  Auth from "./controllers/auth";
import { ExtractJwt } from "passport-jwt";
import * as jwt from "jsonwebtoken";
import {User} from "./models/user";
import { Users } from "./controllers/user";

class App {

	constructor() {
		this.app = express();
		this.config();
		
		this.app.use('/', this.routes());
	}

	public app: express.Application;

	private config(): void {
		this.app.use(bodyParser.json());
		this.app.use(bodyParser.urlencoded({ extended: false }));
		// this.app.use(Auth.initialise());
	}

	private routes(): express.Router {
		const router = express.Router();

		router.get('/api', (req: Request, res: Response) => {
			console.log('Request received');
			res.status(200).send({
			 	message: 'Hello World!'
			});
		});

		router.post('/api/posts', (req: Request, res: Response) => {
			res.json({
				message: 'Post created'
			});
		});

		router.post('/api/create', (req: Request, res: Response) => {
			var user = new User();
			user = {email: req.body.data.username, fullname: req.body.data.fullname, password: req.body.data.password};
			Users.createUser(user);
			res.json({
				message: 'Account created'
			});
		});

		router.post('/api/login', (req: Request, res: Response) => {
			const user = {
				id: 1,
				username: 'kostas',
				email: 'kostas@gmail.com'
			};

			jwt.sign({user}, 'secretkey', (err, token) => {
				res.json({
					token
				});
			});
		});

		return router;
	}
}

export default new App().app;