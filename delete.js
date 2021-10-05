var http = require('http'); 
 var MongoClient = require('mongodb').MongoClient; 
 var url = "mongodb://localhost:27017/user_managements"; 
 MongoClient.connect(url, function(err, client) { 
 const db = client.db("user_managements");
 if (err) throw err; 
 var myquery = {  }; 
 db.collection("employee").deleteMany(myquery, function(err, obj) { 
 if (err) throw err; 
 console.log(obj.result + " record(s) deleted"); 
 client.close(); 
 }); 
 });
