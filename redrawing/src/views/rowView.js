var APP = APP || {};
(function(app) {

    app.RowView = Backbone.View.extend({

        tagName: 'tr',

        template: _.template($('#row-template').html()),

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

}(APP));
