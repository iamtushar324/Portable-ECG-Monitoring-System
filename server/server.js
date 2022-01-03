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
const { a } = require("./a.js");

app.use(require("body-parser").json());

app.get("/:offset", (req, res) => {
	console.log(req.params);
	const offset = req.params.offset;

	// let response = req.body.arr.split(",");
	let response = [];
	let min = 1024;
	for (let i = 0; i < 1000; i++) {
		if (min > a[i * offset]) {
			min = a[i * offset];
		}
	}
	for (let i = 0; i < 1000; i++) {
		response.push({ v: a[i * offset] - min + 100 });
	}

	//Generate random number
	io.local.emit("ecg", response);
	const heartRate = Math.floor(Math.random() * (100 - 60 + 1) + 60);
	io.local.emit("heartRate", heartRate);
	res.send({ isSuccess: 1, message: "OK" });
});

app.post("/", (req, res) => {
	console.log(req.body);
	let aa = req.body.arr.split(",");
	let response = [];
	let min = 1024;
	for (let i = 0; i < 2000; i++) {
		if (min > aa[i]) {
			min = aa[i];
		}
	}
	for (let i = 0; i < 2000; i++) {
		response.push({ v: aa[i] - min + 100 });
	}

	//Generate random number
	io.local.emit("ecg", response);
	const heartRate = Math.floor(Math.random() * (100 - 60 + 1) + 60);
	io.local.emit("heartRate", heartRate);
	res.send({ isSuccess: 1, message: "OK" });
});

io.on("connection", (socket) => {
	console.log(socket.id);
	console.log("a user connected");
});

server.listen(4204, () => {
	console.log("App started at :- 4204");
});