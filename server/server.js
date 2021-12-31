const app = require("express")();

app.use(require("body-parser").json());

app.post("/", (req, res) => {
	console.log(req.body);
	res.send({ isSuccess: 1, message: "OK" });
});

app.listen(4204, () => {
	console.log("App started at :- 4204");
});
