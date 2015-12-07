define(["views/UserView"], function() {
    var UserView = Backbone.View.extend({
        el: ".target",
        template: Handlebars.compile($('#entry-template').html()),
        events: {
            "click ": "select",
        },
        render: function() {
            console.log("render got called");
            this.$el.html(this.template({title: "hello", body: "body"}));
        },
        select: function() {
            console.log("got it here.");
        }
    });

    return UserView;
});

