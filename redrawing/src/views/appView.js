var APP = APP || {};
(function(app) {

    app.AppView = Backbone.View.extend({

        el: $('#app'),

        template: _.template($('#app-template').html()),

        events: {
            'click button': 'addTech'
        },

        initialize: function() {
            this.techs = new app.RowCollection();
            this.techs.add(new app.RowModel());
            this.techs.add(new app.RowModel());
            this.techs.add(new app.RowModel());
            this.listenTo(this.techs, 'all', this.render);
        },

        render: function() {
            this.$el.html(this.template());
            var view = new app.TableView({
                collection: this.techs
            });
            this.$el.append(view.render().el);
        },

        addTech: function() {
            this.techs.add(new app.RowModel());
        }

    });

    new app.AppView().render();

}(APP));
