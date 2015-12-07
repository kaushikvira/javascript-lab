define(["models/StudentModel"], function() {

    var StudentModel = Backbone.Model.extend({
        defaults: {
            collage: "CU Denver",
            state: "Colorado"
        },
        initialize: function() {
            console.log("1.  in init get call after setting default" + this.get("username"));

            this.on("change:username", function(user) {
                console.log("Changed username " + user.previous("username") + " to " + user.userName());
            });

        }
    });

    return StudentModel;
});

