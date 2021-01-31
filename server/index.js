let express = require("express");
let app = express();

app.get("/", function (req, res) {
	res.send("Hello, Node.js!");
});

app.get("/test", function(req, res){
	let x = req.query.x;
	res.send("You send " + x + " for me");
})

app.listen(8080);