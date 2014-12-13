var APP = APP || {};
(function(app) {

    app.TableView = Backbone.View.extend({

        tagName: 'table',

        template: _.template($('#table-template').html()),

        render: function() {
            this.$el.append(this.template());
            this.collection.each(function(row) {
                var rowView = new app.RowView({
                    model: row
                });
                this.$('#table-body').append(rowView.render().el);
            }, this);
            return this;
        },

    });

}(APP));
