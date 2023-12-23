import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(
    import.meta.url));
const app = express();
const port = 3000;

var login = false;

app.use(bodyParser.urlencoded({ extended: true }));

function authorization(req, res, next) {
    let pass = req.body.password;
    if (pass === "123456") {
        login = true;
    }
    next();
}
app.use(authorization);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req, res) => {
    if (login) {
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        //res.sendFile(__dirname + "/public/index.html"); or 
        res.redirect("/");
    }
})
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})