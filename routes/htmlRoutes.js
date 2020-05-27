const router = require("express").Router();
const path = require("path");

router.get("/contact", (_, res) => {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
});

router.get("/portfolio", (_, res) => {
    res.sendFile(path.join(__dirname, "../public/portfolio.html"));
});

router.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;