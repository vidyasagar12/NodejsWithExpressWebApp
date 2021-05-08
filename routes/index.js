'use strict';
var express = require('express');
var router = express.Router();

function GetNames() {
    var names = ["ABC", "XYZ"];
    names.push("PQR");
    names.pop("ABC");
    return names;

}

/* GET home page. */
router.get('/', function (req, res) {
    var Names=GetNames();
    res.render('index', { title: 'Express' });
});

module.exports = router;
