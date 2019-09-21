app.get('/', function (req, res) {
res.send('Hello World!')
})

app.listen(port, function () { 
console.log(`Example app listening on port ${port}!`)
})

//
app.get ('/',handleRoute) ;
app.post ('/another-route', function (req, res) {
console.log (req);    
res.send ('this is a put role')
})

app.put('/put-route',function (req,res) {
    console.log (req);
    res.send ('this is a put route');
})
app.delete('/delete-route',function(req,res) {
    res.send('this is a put route');
})