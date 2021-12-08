
'use strict';
var server = require('server');
var ProductMgr = require('dw/catalog/ProductMgr');
var URLUtils = require('dw/web/URLUtils');

server.get('Start', function (req, res, next) {
    
    var productID = req.querystring.pid;

    var myProduct = ProductMgr.getProduct(productID); 

    res.render('training/productTile', {myProduct:myProduct});
    
    next();
});


server.get('RenderTemplate', function (req, res, next){

    

    res.render('training/modules');
    
    next();
});

server.get('TestRemoteInclude', function (req, res, next){
    
    res.render('training/testremoteinclude');
    
    next();
});


server.get('TestDecorator', function (req, res, next){
    
    res.render('training/testdecorator');
    
    next();
});



module.exports = server.exports();