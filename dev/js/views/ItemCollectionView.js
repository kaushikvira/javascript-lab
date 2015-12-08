define(["views/ItemView"], function(ItemView) {

    var ItemCollectionView = Backbone.View.extend({
        el: ".main-content-area",
        initialize: function() {
            this.collection.on('add', this.addItemToView, this);
        },

        render: function() {

            this.collection.each(function(itemMoel) {
                this.addItemToView(itemMoel);
            }, this);

            return this;
        },
        addItemToView: function(itemMoel) {
            var item1 = new ItemView({model: itemMoel});
            this.$el.append(item1.render().el);
        }
    });

    return ItemCollectionView;
})
;

