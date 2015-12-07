// jscs:disable
require([], function() {

    var track_1, UserModel = Backbone.Model.extend({
        defaults: {
            username: "Kaushik Vira"
        },
        initialize: function() {
            console.log("1.  in init get call after setting default" + this.get("username") + this.defaults.username);
        },
        userName: function() {
            return this.get("username");
        }

    });

    track_1 = new UserModel();

    console.log(JSON.stringify(track_1));

    track_1 = new UserModel({username: "my Lic"});
    track_1.on("change:username", function(user) {
        console.log("Changed username " + user.previous("username") + " to " + user.userName());
    });

    console.log("2." + JSON.stringify(track_1));

    track_1.set({username: "hello"});
    console.log("3." + JSON.stringify(track_1));

    console.log("4." + track_1.toJSON());

    track_1.unset("username");

    console.log("5." + track_1.toJSON());

    track_1.set({username: "hello"}, {silent: true});
    console.log("6." + track_1.toJSON());

});