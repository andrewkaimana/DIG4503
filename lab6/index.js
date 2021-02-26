const Express = require("express"); //defining variable and requiring express
const App = Express();  //assigning value to App
const port = 3001;  //specifiying a port

//define a root
App.get('/', function(request, response){ //access root directory data
    response.send("Hello World!")   //defining the response
});

App.use('/public', Express.static("public"));  //allows us to access files (public)

App.listen(port, function(){    //gives response
    console.log("Server running!");
})