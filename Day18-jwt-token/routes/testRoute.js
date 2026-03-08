const express = require("express");
const router = express.Router();
const authHandler = require("../middlewares/authHandler");

// Temporary protected route
router.get("/protected", authHandler, (req, res) => {
    res.json({
        msg: "You accessed a protected route!",
        user: req.user, // shows decoded token payload
    });
});

module.exports = router;
