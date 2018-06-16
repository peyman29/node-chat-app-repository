let express=require('express');
let app=express();
let http=require('http').Server(app);
let socket=require('socket.io')(http);
let path=require('path');

let mypath=path.join(__dirname,'./views');

console.log(mypath);

app.use(express.static(mypath));

// app.listen(4000,()=>{
//     console.log('waiting for client')
// })
// app.use(express.static(__dirname+"/static"));
// app.engine('')

    app.get('/',(req,res)=>{
        res.render('index',()=>{
            console.log('1 connected');
        });
    });

    app.listen(4000,()=>{
        console.log('waiting for client');
    })