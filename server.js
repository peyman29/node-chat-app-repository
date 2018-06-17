let express=require('express');
let app=express();
let http=require('http').Server(app);
let socket=require('socket.io')(http);
let path=require('path');

let mypath=path.join(__dirname,'./views');

let port=process.env.port || 4000;
app.use(express.static(mypath));

    app.get('/',(req,res)=>{
        res.render('index');
        console.log('1 connected');
    });

    app.listen(port,()=>{
        console.log(`Connected on Server on ${port} port`);
    })