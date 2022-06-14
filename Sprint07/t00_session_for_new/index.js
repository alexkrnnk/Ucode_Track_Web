import express from 'express';
import expressThymeleaf from 'express-thymeleaf';
import session from 'express-session';
import path from 'path';
import { TemplateEngine } from 'thymeleaf';
import hendlerDate from './datePush.js';
import { getSession, hasSession } from './utils.js';

const app = express();
const __dirname = path.resolve();
const templateEngine = new TemplateEngine();

app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');
app.set('views', __dirname);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
	session({
		name: 'anonymous',
		secret: 'anonymous',
		resave: false,
		saveUninitialized: true,
		cookie:{
			maxAge: 1000 * 60 * 100
		}
	})
);

const addSession = (req, session) => {
  	return (req.session.showAd = session);
};

app.listen(3000);

app.get('/', (req, res) => {
	if (!req.body){
		console.log(`Request errore`);
		res.end(404);
	}
	if (hasSession(req)){
		res.render('date', getSession(req));
	}
	else{
		res.render('index');
	}
});

app.post('/', (req, res) => {
	addSession(req, hendlerDate(req.body));
	res.render('date', getSession(req));
});

app.post('/date', (req, res) => {
	req.session.destroy();
	res.redirect('/');
});

