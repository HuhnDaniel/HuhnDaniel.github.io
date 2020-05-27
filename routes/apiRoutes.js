const messagesData = require("../db/messages.json");
const portfolioData = require("../db/portfolio.json");
const router = require("express").Router();
const fs = require("fs");

router.get("/portfolio", (_, res) => {
    res.json(portfolioData);
});

router.get("/messages", (_, res) => {
    res.json(messagesData);
})
.post("/messages", (req, res) => {
    messagesData.forEach(message => {
        message.id++;
    });

    const newMessage = req.body;
    newMessage.id = 1;
    messagesData.unshift(newMessage);

    fs.writeFile("./db/messages.json", JSON.stringify(messagesData, null, 2), err => {
        if (err) throw err;

        console.log("File saved");
    });

    res.end();
});

module.exports = router;