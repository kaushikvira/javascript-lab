// jscs:disable
require([], function(jump) {

    var UserModel = Backbone.Model.extend({
        defaults: {
            license: "Helllo me"
        },
    });

    var track_1 = new UserModel({license: "my Lic"});

    track_1.set({license: "hello"});

    console.log("hello" + JSON.stringify(track_1));

});