let path = require('path');
let os = require("os");
const { networkInterfaces } = require('os');
const nets = networkInterfaces();
let http = require("http");
const url = require('url');
const querystring = require('querystring');

let filename = path.basename(__filename);
console.log("File name: " + filename);

for(let i = 2; process.argv[i]; i++) {
    console.log((i - 1) + " argument = ",process.argv[i]); // Выводит аргументы
}

const results = Object.create(null); 

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        if (net.family === 'IPv4' && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}

console.log("Ip = ",results['Беспроводная сеть'][0]);

console.log("Hostname = ",os.hostname());


let rawUrl = 'https://stackabuse.com/?page=2&limit=3';

let parsedUrl = url.parse(rawUrl);
let parsedQs = querystring.parse(parsedUrl.query);


console.log("Protocol: " + parsedUrl['protocol']);
console.log("Query = " + parsedUrl['query']);

