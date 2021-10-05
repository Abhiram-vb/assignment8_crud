var http = require('http'); 
var MongoClient = require('mongodb').MongoClient; 
var url = "mongodb://localhost:27017/user_managements"; 
MongoClient.connect(url, function(err, client) { 
const db = client.db("user_managements");
if (err) throw err; 
var prevData = {'emp_name':"Divans"}
var updatedData = {$set: {"emp_name":"Atif Kamal"}}
db.collection("employee").updateOne(prevData, updatedData, function(err, result) {
if (err) throw err; 
console.log(result); 
client.close(); 
}); 
});
