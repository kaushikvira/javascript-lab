define(["views/StudentView"], function() {

    var StudentView = Backbone.View.extend({
        el: ".target",
        template: Handlebars.compile($('#entry-template').html()),
        render: function() {
            this.$el.html(this.template(this.model.attributes));
        }
    });

    return StudentView;
});

