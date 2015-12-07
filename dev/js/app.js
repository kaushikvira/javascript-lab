// jscs:disable
require([], function() {

    var track_1, UserModel = Backbone.Model.extend({
        defaults: {
            username: "Kaushik Vira"
        },
        initialize: function() {
            console.log("in init get call after setting default" + this.get("username") + this.defaults.username);
        }

    });

    track_1 = new UserModel();

    console.log(JSON.stringify(track_1));

    track_1 = new UserModel({username: "my Lic"});

    console.log(JSON.stringify(track_1));

    track_1.set({username: "hello"});

    console.log(JSON.stringify(track_1));

    console.log(track_1.toJSON());

    track_1.unset("username");

    console.log(track_1.toJSON());

    track_1.set({username: "hello"}, {silent: true});

});