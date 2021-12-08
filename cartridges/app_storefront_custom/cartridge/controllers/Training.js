/////////////////////////////FIRST TRAINING EXERCISE
/* 'use strict';

var server = require('server');



server.get('HelloWorld', function (req, res, next) {

    var myVariable = "Just a string"

    res.render("training/myfirsttemplate", {myVariable:myVariable});

    return next();
})


module.exports = server.exports(); */










/////////////////////////////////////////////second ex
/*'use strict';

var server = require('server');


server.get('Basket', function (req, res, next) {

    var BasketMgr = require('dw/order/BasketMgr');

    var currentBasket = BasketMgr.getCurrentBasket();

    res.render("training/showBasket", {currentBasket:currentBasket});
    
    next();


});




module.exports = server.exports();*/






////////////////////////////////third ex module 12 Analyze and run an example
// "use strict";

// var server = require("server");
// var csrfProtection = require("*/cartridge/scripts/middleware/csrf");
// var consentTracking = require("*/cartridge/scripts/middleware/consentTracking");

// server.get("Show", consentTracking.consent, server.middleware.https, csrfProtection.generateToken, function(
//     req,
//     res,
//     next
// ) {
//     var URLUtils = require("dw/web/URLUtils");
//     var Resource = require("dw/web/Resource");
//     var profileForm = server.forms.getForm("training");
//     profileForm.clear();

//     res.render("trainingform", {
//         title: Resource.msg("training.form.title.submit", "forms", null),
//         profileForm: profileForm,
//         actionUrl: URLUtils.url("Training-SubmitRegistration").toString()
//     });

//     next();
// });

// server.post(
//     "SubmitRegistration",
//     server.middleware.https,
//     consentTracking.consent,
//     csrfProtection.generateToken,
//     function(req, res, next) {
//         var Resource = require("dw/web/Resource");
//         var URLUtils = require("dw/web/URLUtils");
//         var profileForm = server.forms.getForm("training");
//         res.render("trainingform", {
//             title: Resource.msg("training.form.title.edit", "forms", null),
//             profileForm: profileForm,
//             actionUrl: URLUtils.url("Training-SubmitRegistration").toString()
//         });

//         next();
//     }
// );












////////////////////////////////the fourth exercises Implement your own version

// "use strict";

// var server = require("server");
// var csrfProtection = require("*/cartridge/scripts/middleware/csrf");
// var consentTracking = require("*/cartridge/scripts/middleware/consentTracking");

// server.get("MyOwnVersion", consentTracking.consent, server.middleware.https, csrfProtection.generateToken, function(
//     req,
//     res,
//     next
// ) {
//     var URLUtils = require("dw/web/URLUtils");
//     var Resource = require("dw/web/Resource");
//     var profileForm = server.forms.getForm("profile");
//     profileForm.clear();

//     res.render("profileform", {
//         title: Resource.msg("training.form.title.submit", "forms", null),
//         profileForm: profileForm,
//         actionUrl: URLUtils.url("Training-SubmitMyOwnVersion").toString()
//     });

//     next();
// });

// server.post(
//     "SubmitMyOwnVersion",
//     server.middleware.https,
//     consentTracking.consent,
//     csrfProtection.generateToken,
//     function(req, res, next) {
//         var Resource = require("dw/web/Resource");
//         var URLUtils = require("dw/web/URLUtils");
//         var profileForm = server.forms.getForm("profile");
//         res.render("profileform", {
//             title: Resource.msg("training.form.title.edit", "forms", null),
//             profileForm: profileForm,
//             actionUrl: URLUtils.url("Training-SubmitMyOwnVersion").toString()
//         });

//         next();
//     }
// );






/////////////////module 13 Create a Custom Object using code





//These imports are needed for you to uset eh CustomObjectMgr and Transaction classes
// var CustomObjectMgr = require("dw/object/CustomObjectMgr");
// var Transaction = require("dw/system/Transaction");

// var id = <your code>
// // <some other code if needed>
 
// // Replace "<ID of your Object>" as for example NewsLetterSubscription or the ID you gave your custom object
// var object = CustomObjectMgr.getCustomObject("<ID of your Object>", id);
 
// // If the return from getCustomObject call is not null, then there is already an instance of the object with this ID and we can't use to create our instance
// // If the return is null, it means the ID we are trying to use can be used to create our object instance
// if (!object) {
//     // Remember, object creation, modification and deletion must be done inside transactions
//     Transaction.wrap(function () {
//         object = CustomObjectMgr.createCustomObject("<ID of your Object>", id);
//         <some other logic you might need>
//     }
// } else {
//     <do something else>
// }
"use strict";
var server = require("server");
var csrfProtection = require("*/cartridge/scripts/middleware/csrf");
var consentTracking = require("*/cartridge/scripts/middleware/consentTracking");
server.get("NewsletterSubscription", consentTracking.consent, server.middleware.https, csrfProtection.generateToken, function(req, res, next) {
    var URLUtils = require("dw/web/URLUtils");
    var Resource = require("dw/web/Resource");
    //These imports are needed for you to uset eh CustomObjectMgr and Transaction classes
    var CustomObjectMgr = require("dw/object/CustomObjectMgr");
    var Transaction = require("dw/system/Transaction");
    // var id = <your code>
    // <some other code if needed>
    var id = server.forms.getForm("profile"); //profileForm
    id.clear();
    // Replace "<ID of your Object>" as for example NewsLetterSubscription or the ID you gave your custom object
    var object = CustomObjectMgr.getCustomObject("NewsletterSubscription", id); 

    if (!object) {
        // Remember, object creation, modification and deletion must be done inside transactions
        Transaction.wrap(function () {
            object = CustomObjectMgr.createCustomObject("NewsletterSubscription", id);
            });
    }else{
        object = CustomObjectMgr.getCustomObject("NewsletterSubscription", id);
    }
    
    res.render("profileform", {
        title: Resource.msg("training.form.title.submit", "forms", null),
        id: id,
        CustomObjectMgr:CustomObjectMgr,
        Transaction:Transaction,
        object:object,
        actionUrl: URLUtils.url("Training-NewsletterSubscription").toString()
    });

    next();
});
module.exports = server.exports();
