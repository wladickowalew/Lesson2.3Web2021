let express = require("express");
let cors = require("cors");
let app = express();
app.use(cors());

app.get("/", function (req, res) {
	res.send("Hello, Node.js!");
});

app.get("/test", function(req, res){
	let x = req.query.x;
	res.send("You send " + x + " for me");
})

app.listen(8080);