import path from 'path';
import * as fs from 'fs';

export class File
{
	constructor(name){
		this.name = name;
		this.pathDir = path.join(path.resolve(), './tmp');
	}

	write(text){
		if (text === ''){
			throw new Error('write text pls');
		}

		const isExists = (path) => fs.existsSync(path);

		const checkpath = isExists(this.pathDir);

		if (!checkpath){
			fs.mkdirSync(this.pathDir);
		}
		else{
			const check = isExists(this.pathDir + '/' + this.name);

			if (!check){
				fs.writeFileSync(this.pathDir + '/' + this.name, text, 'utf8');
			}
			else{
				fs.appendFileSync(this.pathDir + '/' + this.name, `\n${text}`);
			}
		}
	}

	delete()
	{
		try{
			fs.unlinkSync(this.pathDir + '/' + this.name);
		}
		catch (err){
			console.error(err);
		}
	}

	read(){
		const textCurr = fs.readFileSync(this.pathDir + '/' + this.name, 'utf8');
		return textCurr;
	}
}

