const express = require('express')
const app = express()

app.use(express.static('public'))

app.use("/app", loggin("APP"));
app.use("/admin", loggin("ADMIN"));

function loggin(prefix){
    return function (req, res, next){
        console.log(prefix, req.method, req.url);
        next();
    }
}

app.use(function(req, res, next){
    req.user = {
        name : "Rehan"
    }
    next();
})

app.use(function(req, res, next){
    console.log("A1");
    next();
    //res.send("In Middleware");
});
app.use("/abc1",function(req, res, next){
    console.log("A2");
    next();
});
app.use(function(req, res, next){
    console.log("A3");
    next("Error ");
});
app.use(function(req, res, next){
    console.log("A4");
    next();
});

app.get("/abc", function(req, res){
    console.log("ABC");
    res.send("ABC")
})

/*
/abc?username=rehan&pass=123
/user?type=shopkeeper
/user?type=customer
*/
app.get('/user', function(req, res, next) {
    console.log(req.user);
    if(req.query.type == "shopkeeper"){
        next();
    } else if(req.query.type == "customer") {
        res.send('User Request customer!');
    } else {
        next("Page Not Found");
    }
    
}, function(req, res) {
    res.send('User Request shopkeeper!');
})



app.delete('/abc', function(req, res) {
    res.send('abc!')
})
app.put('/abc', function(req, res) {
    res.send('abc!')
})

app.get('*', function(req, res, next) {
    console.log("C");
    res.send('abc3!')
})

app.use(function(err, req, res, next){
    console.log("Inside Error Middleware");
    res.send("Error : " + err );
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))

