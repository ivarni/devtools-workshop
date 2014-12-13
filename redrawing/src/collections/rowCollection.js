var APP = APP || {};
(function(app) {

    app.RowCollection = Backbone.Collection.extend({

        model: app.RowModel,

        comparator: function(model) {
            return -model.get('coolness');
        }

    });

}(APP));
