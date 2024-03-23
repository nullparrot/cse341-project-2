// Requirements
const express = require("express");
const router = new express.Router();
const indexController = require("../controllers/");
const passport = require("passport");

//Routes
router.use("/", require("./swagger"));
router.use("/tablets", require("./tablets"));
router.use("/phones", require("./phones"));
router.use('/api-docs', require('./swagger'))

router.get("/login", passport.authenticate("github"), (req, res) => {});

router.get("/logout", function (req, res, next) {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        res.redirect("/");
    });
});

module.exports = router;
