var express = require("express");
var app = express();
var path = require("path");
var hbs = require("hbs");
//_______________________________________________________________________________________________________


app.use(express.static(__dirname + '/public'));

//headers and stuff you are using in other pgs
hbs.registerPartials(__dirname + '/views/partial');

//make sure the post ends up in the request object
app.use(express.urlencoded());

//telling express to use that view
app.set('view engine', 'hbs');
//__________________________________________________________________________________________________


app.get("/", function(req, res){
    res.render("index.html");
});

// app.get("/about", function(req, res){
//     res.render("about.hbs", {junk:"About Page"});
// });

app.get("/index", function(req, res){
    res.render("index.hbs", {lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."});
});

app.get("/form", function(req, res){
    res.render("form.hbs", {junk:"Form Page!!"});
});

app.get("/about", function(req, res){
    res.render("about.hbs", {lorem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumv <br><br> But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"});
});






//_________________________________________________________________________________________________

app.post("/results", function(req, res){
    res.render("results.hbs", {junk:"<b style='color: black;'>Name: </b>" + req.body.Name + "  " + "<b style='color: black;'>Email: </b>" + req.body.Email + "<br><br><b style='color: black;'>Comments: </b> " + req.body.Comments});
});

// app.post("/results", function(req, res){
//     res.render("results.hbs", {junk:"<b style='color: black;'>Name: </b>" + req.body.Name + "  " + "<b style='color: black;'>Email: </b>" + req.body.Email + "<br><br><b style='color: black;'>Comments: </b> " + req.body.Comments});
// });

//use get to request and post for response
app.listen(3000, ()=>{console.log("Server running on port 3000")});