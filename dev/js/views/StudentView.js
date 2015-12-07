define(["views/StudentView"], function() {
    var UserView = Backbone.View.extend({

        el: ".target",
        template: Handlebars.compile($('#entry-template').html()),

        initialize: function() {

        },
        render: function() {
            this.$el.html(this.template(this.model.attributes));
        }
    });

    return UserView;
});

