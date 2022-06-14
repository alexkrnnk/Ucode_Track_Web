import fs from 'fs';
import path from 'path';
import { Comment } from './Comment.js';
import { AvengerQuote } from './AvengerQuote.js';
import xml2js from 'xml2js';

export class ListAvengerQuotes
{
	constructor(data){
		this.data = this.init(data);
	}

	init(data){
		let ret = data.map((value) => new Comment(new AvengerQuote(value)));
		return ret;
	}

	toXML(){
		const pathFile = path.resolve() + '/' + 'avenger_quote.xml';
		const checkpathFile = fs.existsSync(pathFile);
		if (checkpathFile){
			const ret = fs.readFileSync(pathFile, 'utf-8');

			return ret;
		}

		const bilder = new xml2js.Builder();
		const toXML = bilder.buildObject(this.data);
		fs.writeFileSync(pathFile, toXML);

		return toXML;
	}

	fromXML(){
		const pathFile = path.resolve() + '/' + 'avenger_quote.xml';
		let res = '';

		xml2js.parseString(fs.readFileSync(pathFile, 'utf-8'), (err, result) => {
			if (err){
				return err;
			}
			
			res = result;
		});

		return JSON.stringify(res);
	}
}

