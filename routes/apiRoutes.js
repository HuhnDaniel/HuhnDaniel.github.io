const messagesData = require("../db/messages.json");
const portfolioData = require("../db/portfolio.json");
const router = require("express").Router();
const fs = require("fs");

router.get("/portfolio", (req, res) => {
    res.json(portfolioData);
});

module.exports = router;