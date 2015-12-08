define(["models/ItemModel"], function(ItemModel) {

    var ItemCollection = Backbone.Collection.extend({
        modal: ItemModel
    });
    return ItemCollection;
});

