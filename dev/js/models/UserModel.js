define(["models/UserModel"], function() {

    return Backbone.Model.extend({
        defaults: {
            username: "Kaushik Vira"
        },
        initialize: function() {
            console.log("1.  in init get call after setting default" + this.get("username"));

            this.on("invalid", function(model, error) {
                console.log("yooooooooo, this is not right" + error);
            });

            this.on("change:username", function(user) {
                console.log("Changed username " + user.previous("username") + " to " + user.userName());
            });

        },
        userName: function() {
            return this.get("username");
        },

        validate: function(obj) {

            console.log("new Attribute will be " + JSON.stringify(obj));
            console.log("Validation called with Name " + this.userName());

            if (this.userName() === "Kaushik Vira") {
                console.log("Validation called and everything is fine " + this.userName());
            } else {
                return "hay what`s you doing";
            }
        }

    });

});

