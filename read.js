var http = require('http'); 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/user_managements"; 
MongoClient.connect(url, function(err, client) { 
const db = client.db("user_managements");
if (err) throw err; 
db.collection("employee").find().toArray(function(err, result) { 
if (err) throw err; 
console.log(result); 
client.close(); 
}); 
});
