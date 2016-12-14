var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/addUser', function (req, res) {
	//添加的新用户数据
	var user = {
	   "user4" : {
	      "name" : "mohit",
	      "password" : "password4",
	      "profession" : "teacher",
	      "id": 4
	   }
	}

	// 读取已存在的数据
	fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
	   data = JSON.parse( data );
	   data["user4"] = user["user4"];
	   console.log( data );
	   res.end( JSON.stringify(data));
	});

})

// app.get('/:id', function (req, res) {
//    // 首先我们读取已存在的用户
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//        data = JSON.parse( data );
//        var user = data["user" + req.params.id] 
//        console.log( user );
//        res.end( JSON.stringify(user));
//    });
// })


app.get('/deleteUser', function (req, res) {

	var id = 2;

   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 2];
       
       console.log( data );
       console.log("????????????????????");
       res.end( JSON.stringify(data));
   });
})

var server = app.listen(8080, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})









