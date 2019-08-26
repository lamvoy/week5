let express = require('express');
let app = express();
let bodyParser = require('body-parser')
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.listen(8080,()=>{
    console.log("localhost:8080")
}
);

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(express.static('img'));
app.use(express.static('css'));

//what is?
//app.use(bodyParser.json())

let db = [];

let showView = __dirname+"/views/";//what is showview?

app.get('/', (req, res)=>{
    res.sendFile(showView+"/index.html")
})

app.get('/newtask', (req, res)=>{
    res.sendFile(showView+"newtask.html");
})

app.get('/listtasks', (req, res)=>{
    res.render('listtasks', {
        taskDb: db,
    })

})

app.post('/addtask', function(req, res){
   db.push(req.body);
   res.render('listtasks.html',{
        taskDb:db
   })
})