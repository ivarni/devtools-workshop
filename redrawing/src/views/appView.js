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
            this.addTech();
            this.listenTo(this.techs, 'all', this.render);
        },

        render: function(e) {
            this.$el.html(this.template());
            var view = new app.TableView({
                collection: this.techs
            });
            this.$el.append(view.render().el);
        },

        addTech: function() {
            var model = new app.RowModel();
            this.techs.add(model);
            setTimeout(function() {
                model.set('coolness', Math.floor(model.get('coolness') / 2))
            }, 3000)
        }

    });

    new app.AppView().render();

}(APP));
