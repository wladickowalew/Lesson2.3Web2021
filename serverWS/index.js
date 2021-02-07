let wss = require("ws").Server;

let server = new wss({port: 8081});
let clients = new Set();

server.on("connection", function (socket) {
	clients.add(socket);

	socket.on("message", function(message){
		for(let client of clients){
			client.send(message);
		}
	});

	socket.on("close", function(){
		clients.delete(socket);
	});
});