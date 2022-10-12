const express = require("express");
const data = require("./data/data.js");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("It's Runnig....");
});

app.get("/api", (req, res) => {
    if (!data) return res.status(404).send(`There is no data in this file ${data}!`);
    res.status(200).send(data);
});

app.get("/api/:target", (req, res) => {
    const target = req.params.target;
    console.log(data[0][target]);
    if (!data[0][target]) return res.status(404).send(`There is no Specific data in this file name "${target}"`);
    res.status(200).send(data[0][target]);
});
app.post("/api/post", (req, res) => {
    const data = req.body;
    if (!data) return res.status(400).send("Put Some data");
    res.send(data);
});

app.listen(PORT, () => console.log("Port running on", PORT));
