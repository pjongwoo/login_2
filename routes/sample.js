var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
    res.render("sample_view/00_login", {session: ""});
});

router.get('/signup', function(req, res, next) {
    res.render("sample_view/00_signup", {session: ""});
});

module.exports = router;

