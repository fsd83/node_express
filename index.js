// install express for us to run this project



'use strict';

const express = require("express"); // import express

// constants
const PORT = 6001;              // port address that the app is listing for
const HOST ="127.0.0.1";        // domain name is localhost default, http://127.0.0.1:8080 == http://localhost.local:8080
const OS = require("os");       // import the os environment
const ENV = "DEV";              // specify that this project is under development. for production will be "PROD"


// app

const app = express();                                         // invoke the express library
app.get("/", (request, response) => {                          // listen for get request: http://127.0.0.1/ for the root of the app, callback function the process the requst
  response.statusCode = 200;                                   // return 200 status code === SUCCESS
  const msg = 'Hello FSD Learner! Running Node.js!';           // create the response message
  response.send(msg);
});

app.get("/test", (request, response) => {                      // lsiten for get request: http://127.0.0.1/
    response.statusCode = 200;                                 
    const msg = 'Hello from /test Node!';
    response.send(msg);
  });

app.listen(PORT, HOST);                                         // invoke the listen() method for app, listen to port 8080, host 127.0.0.1
console.log(`Running on http://${HOST}:${PORT}`);               // log the start of the app to listen for requests