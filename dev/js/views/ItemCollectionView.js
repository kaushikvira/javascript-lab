define(["views/ItemView"], function(ItemView) {

    var ItemCollectionView = Backbone.View.extend({
        el: ".main-content-area",
        initialize: function() {
            this.collection.on('add', this.addItemToView, this);
        },

        render: function() {
            var container = document.createDocumentFragment();
            this.collection.each(function(itemMoel) {
                var item1 = new ItemView({model: itemMoel});
                container.appendChild(item1.render().el);
            }, this);

            this.$el.append(container);
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

