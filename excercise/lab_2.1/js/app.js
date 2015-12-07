// jscs:disable
require(["views/jump"], function(jump) {

    $('.target').html("hellllo this is working. <p>");

    if (_.contains([1, 2, 3], 3)) {
        $('.target').append("Underscore is working. Like Charm <p>");
    }

    var model = new Backbone.Model({isWorking: 'working'});
    $('.target').append('Backone is ' + model.get('isWorking') + "<p>");

    jump();

});