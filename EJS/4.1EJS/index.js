import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {


    let type = "a weekday";
    let adv = "its time to work hard";
    const d = new Date("December 17, 1983 01:15:00");
    let day = d.getDay();
    //console.log(day);
    if (day === 0 || day === 6) {
        type = "a weekend";
        adv = "its party time";
    }
    res.render("index.ejs", { daytype: type, advice: adv });
});

app.listen(port, () => {
    console.log(`server listening on ${port}`);
})