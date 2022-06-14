import path from 'path';
import * as fs from 'fs';

export class FileList
{
	constructor(){
		this.pathDir = path.join(path.resolve(), './tmp');
	}

	getList(){
		const fileD = [];
		
		fs.readdirSync(this.pathDir).forEach((file) => {
			const text = fs.readFileSync(this.pathDir + '/' + file, 'utf-8');
			fileD.push({ fileName: file, text });
		});

		return fileD;
	}

	hasFiles(){
		const check = fs.existsSync(this.pathDir);
		if (!check){
			fs.mkdirSync(this.pathDir);
		}
		else{
			const isEmpty = fs.readdirSync(this.pathDir);
			const ret = isEmpty ? true : false;

			return ret;
		}
	}

	getHTMLList()
	{
		let buf = '';
		let html = `<li><a href="/select-file?file=${fileName}">${fileName}</a></li>`;
		fs.readdirSync(this.pathDir).forEach((fileName) => {
			buf += html;
		});

		const ret = `<ul>${buf}</ul>`;

		return ret;
	}
}

