define([], function() {

    var ItemModel = Backbone.Model.extend({
        defaults: {
            title: "title",
            message: "message"
        }
    });
    return ItemModel;

});

