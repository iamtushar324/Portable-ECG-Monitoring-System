const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
	},
});
const cors = require("cors");

app.use(require("body-parser").json());

app.post("/", (req, res) => {
	console.log(req.body);

	response = req.body.arr.split(",");
	for (let i = 0; i < 1000; i++) {
		//generate random number
		response.push({ v: Math.floor(Math.random() * 1024) });
	}
	//Genrate random number
	io.local.emit("ecg", response);
	setTimeout(() => {}, 1000);
	const heartRate = Math.floor(Math.random() * (100 - 60 + 1) + 60);
	i.local.emit("heartRate", heartRate);
	res.send({ isSuccess: 1, message: "OK" });
});

io.on("connection", (socket) => {
	console.log(socket.id);
	console.log("a user connected");
});

server.listen(4204, () => {
	console.log("App started at :- 4204");
});
