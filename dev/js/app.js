// jscs:disable
require([
        "models/UserModel",
        "views/UserView"
    ],
    function(UserModel, UserView) {

        var user, track = new UserModel({username: " Vira"});

        console.log("Let`s change name to hello");
        track.set({username: "hello"}, {validate: true});

        console.log("Does name change? - " + JSON.stringify(track));
        track.save();

        user = new UserView();
        user.render();

    });