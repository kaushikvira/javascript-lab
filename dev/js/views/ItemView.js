define([], function() {

    var ItemView = Backbone.View.extend({

        template: Handlebars.compile($('#item-tempalte').html()),
        events: {
            "click .remove": 'removeItem'
        },
        render: function() {
            this.$el.html(this.template(this.model.attributes));
            return this;
        },
        removeItem: function() {
            this.remove();
            this.model.destroy();
        }

    });
    return ItemView;
});

