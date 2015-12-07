// jscs:disable
require(["models/UserModel"], function(UserModel) {

    var track_1 = new UserModel({username: " Vira"});

    console.log("Let`s change name to hello");

    track_1.set({username: "hello"}, {validate: true});

    console.log("Does name change? - " + JSON.stringify(track_1));

    track_1.save();

});