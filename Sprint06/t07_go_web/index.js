var express = require('express');
const normal = require('./normal-router');
var app = express();

app.set('view engine', 'ejs');



app.get('/', function(req, res) {
    let then = new Date("1939-01-01");
    let now = new Date();

    let dDate = new normal.dateDiff(then,now);

    let dDateyears = dDate.years;
    let dDatemonth = dDate.month;
    let dDatedays = dDate.days;

    res.render('../t07_go_web/views/index.ejs', {
        dDatemonth: dDatemonth,
        dDatedays: dDatedays,
        dDateyears: dDateyears
    });
});


app.get('/quantum', function(req, res) {
    let then = new Date("1939-01-01");
    let now = new Date();

    let dDate = new normal.dateDiff(then,now);

    let quantumYears = 1;
    for(let i = 0; i < dDate.years; i++){
        if(i==7||i==14||i==21||i==28||i==35||i==42||i==49||i==56||i==63||i==70||i==77||i==84||i==91||i==98||i==105)
            quantumYears++;
    }
    let quantumMonths = dDate.month + 4;
    let quantumDays = dDate.days;

    dDate.years = quantumYears;
    dDate.month = quantumMonths;
    dDate.days = quantumDays;

    let dDateyears = dDate.years;
    let dDatemonth = dDate.month;
    let dDatedays = dDate.days;

    res.render('../t07_go_web/views/quantum.ejs', {
        dDatemonth: dDatemonth,
        dDatedays: dDatedays,
        dDateyears: dDateyears
    });
});

app.listen(8080);
console.log('8080 port is listening');

