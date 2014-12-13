var APP = APP || {};
(function(app) {

    app.RowView = Backbone.View.extend({

        tagName: 'tr',

        template: _.template($('#row-template').html()),

        initialize: function() {
            //this.listenTo(this.model, 'change', this.update);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        update: function(e) {
            this.$('.coolness').html(this.model.get('coolness'));
        }

    });

}(APP));
