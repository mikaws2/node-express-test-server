
const express = require("express");
const app = express();

app.get("/", function(request, response) {

    console.log(request);
    response.send("<h1>Hello world</h1>");
    
});

app.listen(3000, function(){
    
    console.log("server is running on port 3000.");

});
