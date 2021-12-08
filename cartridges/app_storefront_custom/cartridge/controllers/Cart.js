'use strict';

var server = require('server');

server.extend(module.superModule)

server.get('Show', function (req, res, next) {

    var viewData = res.getViewData();

    viewData.example = "random text3";


    res.setViewData(viewData);


    res.render('training/myfirsttemplate', {viewData:viewData});

    return next();
});



module.exports = server.exports();
