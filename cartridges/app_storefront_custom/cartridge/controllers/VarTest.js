'use strict';

var server = require('server');

// server.extend(module.superModule)

server.get('HelloVar', function (req, res, next) {

    var myVariable = "Just a string"

    res.render("training/vartest", {myVariable:myVariable});


    return next();
})



module.exports = server.exports();

