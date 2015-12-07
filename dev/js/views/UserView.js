define(["views/UserView"], function() {

    return Backbone.View.extend({
        el: ".target",

        render: function() {
            console.log("render got called");
            this.$el.html("helllo I replaced it");
        }
    });

});

