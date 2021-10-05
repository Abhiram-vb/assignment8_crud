var MongoClient = require("mongodb").MongoClient;
 var url = "mongodb://localhost:27017/user_managements";
 MongoClient.connect(url, function (err, client) {
   if (err) throw err;
   var myobj = [
       {"emp_id":1,"emp_name":"Abhiram"},
       {"emp_id":2,"emp_name":"Atif"},
       {"emp_id":3,"emp_name":"Divanshu"},
       {"emp_id":4,"emp_name":"Nikhil"},
       {"emp_id":5,"emp_name":"Aditya"},
       {"emp_id":6,"emp_name":"Thanuja"},
       {"emp_id":7,"emp_name":"Hemalatha"}
   ];
   const db = client.db("user_managements");
   db.collection("employee").insertMany(myobj, function (err, res) {
     if (err) throw err;
     console.log("Number of records inserted: " + res.insertedCount);
     client.close();
   });
 });
