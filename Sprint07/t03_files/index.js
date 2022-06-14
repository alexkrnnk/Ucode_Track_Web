import express from 'express';
import session from 'express-session';
import { File } from './File.js';
import { FileList } from './FileList.js';
import expressThymeleaf from 'express-thymeleaf';
import path from 'path';
import { TemplateEngine } from 'thymeleaf';
import {
	hasSession,
	addSession,
	sessionEnd,
	getSessionValue,
} from './utils.js';

const app = express();

const templateEngine = new TemplateEngine();
app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');
app.set('views', path.resolve());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
		name: 'codeil',
		secret: 'anonymous',
		resave: false,
		saveUninitialized: true,
		cookie: {
		maxAge: 1000 * 60 * 100,
		},
	})
);

app.listen(3000);

app.get('/', async (req, res) => {
	const files = new FileList();
	if (files.hasFiles()){
		console.log(JSON.stringify(files.getList()));
		const ret = res.render('index', {files: JSON.stringify(files.getList())});

		return ret;
	}
	res.render('index');
});

app.post('/create', async (req, res) => {
	const data = req.body;
	addSession(req, 'a');
	console.log(data);
	new File(data.fileName).write(data.content);
	res.redirect('/');
});

app.post('/delete', async (req, res) => {
	const data = req.body;
	new File(data.deleteFile).delete();
	const ret = res.redirect('/');
	return ret;
});

