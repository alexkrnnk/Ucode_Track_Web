var express = require('express');
const path = require('path'); 
const bodyParser = require('body-parser'); 
var mysql=require('mysql');
var connection = require('./database/db'); 
const session = require('express-session');
const { rsort } = require('semver');
const ejs = require('ejs');
var aejs = require('async-ejs');
let counter = 0;


var app=express();
var server = require('http').createServer(app);
const io = require('socket.io')(server);
server.listen(3000)

function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}
// Подключение сокетов 
// Подключение сокетов 

var first_log;
var second_log;

var first_num;
var second_num;

connections = [];
var pleyr_id = 0;
var pleyr_id1 = 0;
var number1 = [getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19)];
var number2 = [getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19),getRandomInt(19)];
var amount = 0;
var Tresh = 0;
var tresh1 = 1;
io.sockets.on('connection', function(socket)
{    
    if(pleyr_id == 1)
    {
        socket.emit('player1',{greeting: number1[amount]})// Ввод клиенту

        socket.emit('player2',{greeting: number2[amount]})// Ввод 


        socket.emit('img1',{greeting: first_num})
        socket.emit('img2',{greeting: second_num})

        socket.emit('Name1',{greeting: first_log})
        socket.emit('Name2',{greeting: second_log})
        
        if(number1[amount] < number2[amount])
        {
            socket.emit('decider',{greeting: 1})
        }
        else if (number1[amount] > number2[amount])
        {
            socket.emit('decider',{greeting: 2})
        }
    }
    else
    {
        socket.emit('img1',{greeting: second_num})
        socket.emit('img2',{greeting: first_num})

        socket.emit('Name1',{greeting: second_log})
        socket.emit('Name2',{greeting: first_log})

        socket.emit('player1',{greeting: number2[amount]})// Ввод клиенту

        socket.emit('player2',{greeting: number1[amount]})// Ввод клиенту
        if(number1[amount] < number2[amount])
        {
            socket.emit('decider',{greeting: 2})
        }
        else if (number1[amount] > number2[amount])
        {
            socket.emit('decider',{greeting: 1})
        }
    }
    pleyr_id++;
    socket.on('greeting',function (data)
    {
        pleyr_id1++;
            
            
            if(Tresh < 2 )
            {
                amount = tresh1;
            }
            else
            {   tresh1++;
                Tresh = 0;
                amount = tresh1;
            }
            Tresh++;
            console.log(Tresh)
            console.log(tresh1)
            if(pleyr_id1 == 1)
            {
                
                socket.emit('player1',{greeting: number1[amount]})// Ввод клиенту

                socket.emit('player2',{greeting: number2[amount]})// Ввод 
                
                if(number1[amount] < number2[amount])
                {
                    socket.emit('decider',{greeting: 1})
                }
                else if (number1[amount] > number2[amount])
                {
                    socket.emit('decider',{greeting: 2})
                }
            }
            else
            {
                socket.emit('player1',{greeting: number2[amount]})// Ввод клиенту

                socket.emit('player2',{greeting: number1[amount]})// Ввод клиенту
                if(number1[amount] < number2[amount])
                {
                    socket.emit('decider',{greeting: 2})
                }
                else if (number1[amount] > number2[amount])
                {
                    socket.emit('decider',{greeting: 1})
                }
            }
            if(pleyr_id1 == 2)
            {
                pleyr_id1 = 0 
            }
    })

    // проверка на конект
    console.log("Connect")
    connections.push(socket);
    socket.on('disconnect',function(data)
    {
        connections.splice(connections.indexOf(socket),1); 
        console.log("Disconect")
    })
});

// Подключение сокетов \\

app.use(bodyParser.json());
app.set("view engine", "ejs");

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

// Подключение html css
app.use(express.static('views'));
// Подключение html css\\

app.get('/', function (req,res) {
    res.render(path.join(__dirname, './views/html/login'), {
        url: '/login',
        title: "Entrance"
    });
})

app.post('/login', async function(request, response) {
	let login = request.body.login;
	let password = request.body.password;
    let register = request.body.reg;
    

    if(register){
        response.redirect('/register');
    }
    else{
        if (login && password) {

            connection.query('SELECT * FROM user WHERE login = ? AND password = ?', [login, password], function(error, results, fields) {
        
                if (error) throw error;
        
                if (results.length > 0) {
                    
                    request.session.login = login;

                    if(counter == 0){
                        request.session.first_login = login;
                        first_log = login;
                    }
                    else if (counter == 1){
                        request.session.second_login = login;
                        second_log = login;
                        counter = 0;
                    }
                    
                    if(first_log != undefined){
                        connection.query('SELECT * FROM user WHERE login = ?', [first_log], function(error, results, fields){
                            first_num = results[0].number;
                        })
                    }

                    if(second_log != undefined){
                        connection.query('SELECT * FROM user WHERE login = ?', [second_log], function(error, results, fields){
                            second_num = results[0].number;
                        })
                    }
                   
                   
                    connection.query('SELECT * FROM user WHERE login = ?', [login], function(error, results, fields){
                        if(results[0].number == 1){
                            request.session.image = "../img/ZSU.jpg"
                        }
                        else if(results[0].number == 2){
                            request.session.image = "../img/BanderaFlag.jpg"
                        }
                        else if(results[0].number == 3){
                            request.session.image = "../img/Capitanjpg.jpg"
                        }
                        else{
                            request.session.image = "../img/Ukraine.jpg"
                        }
                        response.redirect('/profile');
                        response.end();
                        console.log(first_log + ": " + first_num)
                        console.log(second_log + ": " + second_num)
                    })
                    counter++;
                } else {
                    response.send('Incorrect Username and/or Password!');
                    response.end();
                }			
                });
        } else {
            response.send('Please enter Username and Password!');
            response.end();
        }
    }
});

app.get('/profile', function (req,res) {
    res.render(path.join(__dirname, '/views/html/profile'), {
        url: '/profile',
        title: 'Profile',
        user: req.session.login,
        img: req.session.image
    });
})

app.post('/profile', function (request, response){
    let go = request.body.go;

    if(go){
        response.redirect('/game');
    }
})

app.get('/game', function (req,res) {
    res.render(path.join(__dirname, '/views/html/game'), {
        url: '/game',
        title: 'Game',
        first_user: req.session.first_login,
        second_user: req.session.second_login
    });
})

app.post('/game', function (request, response){


})

app.get('/register',function (req,res) {
    res.render(path.join(__dirname, './views/html/register'), {
        url: '/register',
        title: "Register"
    });
})
 
app.post('/register', async function (request, response) {   
    let login = request.body.login;
	let password = request.body.password;
    var confirm = request.body.confirm_password;
    let back = request.body.back;
    let number = request.body.fooby;

    const sql = `SELECT * FROM user WHERE login = ?`;
    
    
    if(back){
        response.redirect('/');
    }
    else{
        if(login == '' && password == '' && confirm == ''){
            console.log("Корректно заполните поля!")
            response.redirect('/register')
        }
        else{
            connection.query(sql, login, function (err,rs) {
                if(!rs.length){
                    if(password === confirm){
                        const sql_1 = 'INSERT INTO user SET ?'
                        if(number != undefined){
                            connection.query(sql_1, {login, password, number}, function (err,rs) {
                                console.log('New user in database!');
                                response.redirect('/')
                            })
                        }
                        else{
                            console.log("Вы не выбрали аватар профиля!");
                            response.redirect('/register');
                        }
                        
                        
                    }
                    else{
                        console.log("Пароли не едентичны!");
                    }
                }
                else{
                    console.log("Такой пользователь существует!");
                }
            })
        }
    }
})



