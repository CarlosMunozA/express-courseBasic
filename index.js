const e = require('express');
const express = require('express');
const morgan = require('morgan');
//const { nextTick } = require('node:process');
const app = express();


// function logger(req,res,next){
//     console.log(`Route Received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
//     next();
// }

//settings
app.set('AppName','Fazt Express Tutorial');
app.set('port',3000);
app.set('view engine','ejs');

//middlewares
app.use(express.json());
//app.use(logger);
app.use(morgan('dev'));

//Routes

// app.all('/user', (req,res,next) =>{
//     console.log('Por aquí paso');
//     next();
// });

app.get('/',(req,res)=>{
    const data =[{name:'Jhon'},{name:'Joe'},{name:'Cameron'}, {name:'Ryan'}];
    res.render('index.ejs',{people: data});
});

app.get('/user',(req,res)=>{
    res.json({
        username: 'Cameron',
        lastname: 'Howe'
    });
});

app.post('/user/:id',(req,res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('POST REQUEST RECEIVED');
});
app.put ('/user/:id',(req,res)=>{
    console.log(req.body);
    res.send(`User ${req.params.id} updated`);
    });
app.delete('/user/:UserId', (req,res)=>{
    res.send(`User ${req.params.UserId} deleted`);
});

//middleware se activa si no se entro a ninguna ruta y no hubo error
app.use(express.static('public'));

app.listen(app.get('port'),()=>{
    console.log(app.get('AppName'));
    console.log('server on port',app.get('port'));
});


//Esta es la forma de hacerlo con nodejs, es larga
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.status = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });

// server.listen(3000, () => {
//     console.log('Serve on port 3000');
// });
//npm init -y crea el package.json
//npm install express   y se instala el express
//npm install nodemon -D    para trabajar con el servidor sin ingresar todo
//npx nodemon index.js  para ingresar en esta carpeta
//npm i morgan
//npm install ejs plantillas js