const express = require('express')
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var schema = mongoose.Schema;
var todoSchema = new schema({
    title: { type: String, required: true }
})
const Todo = mongoose.model('Todo', todoSchema);


var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'))

// app.get('/', (req, res) => res.send('Hello World!'));

app.post("/todo", function(req, res){
    console.log(req.body);
    var todo = new Todo(req.body);
    todo.save().then(function(){
        res.send("done!")
    })
})
app.get("/todo", function(req, res){
    console.log(res)
    Todo.find({}).exec(function(err, data){
        res.send(data);
    })
})
app.delete("/todo", function(req, res){
    console.log(req.body);
    var query = {_id: req.body._id };
    Todo.remove(query).exec(function(err, data){
        console.log(err);
        res.send("done!");
    })
})
app.put("/todo",function(req,res){
    var query = {
        _id:req.body._id
    }
    Todo.findOne(query).exec(function(err,obj){
        obj.title = req.body.title;
        obj.save().then(function(data){
            res.send("done!")
        })
        // Todo.update(req.body).exec(function(err,res){
        //     console.log(err);
        // });
    });
    // Todo.findByIdAndUpdate(req.body._id,req.body).exec(function(err, data){
    //     res.send("done!");
    // });
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))