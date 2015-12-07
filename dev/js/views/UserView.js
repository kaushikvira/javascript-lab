define(["views/UserView"], function() {

    var UserView = Backbone.View.extend({
        el: ".target",
        template: Handlebars.compile("Hello this is handlebar template"),
        events: {
            "click ": "select",
        },
        render: function() {
            console.log("render got called");
            this.$el.html(this.template());
        },
        select: function() {
            console.log("got it here.");
        }
    });

    return UserView;
});

