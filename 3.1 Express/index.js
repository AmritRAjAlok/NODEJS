import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>hello world</h1>");
})

app.get("/home", (req, res) => {
    res.send("<h1>Home</h1><p>home page</p>");
})

app.get("/contact", (req, res) => {
    res.send("<h1>contact me</h1><p>my name is amrit</p>");
})
app.listen(3000, () => {
    console.log("server running on port 3000")
})