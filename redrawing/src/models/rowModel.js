var APP = APP || {};
(function(app) {

    var count = 1;

    var techs = [
        'Angular',
        'Backbone',
        'Ember',
        'Knockout',
        'React',
        'Dojo',
        'Meteor',
        'Can',
        'Batman',
        'Prototype',
        'jQuery'
    ];

    app.RowModel = Backbone.Model.extend({

        defaults: function() {

            if (techs.length === 0) {
                var tech = ['Inhouse framework ' + count++];
            } else {
                var index = _.random(0, techs.length - 1);
                var tech = techs.splice(index, 1);
            }

            return {
                tech: tech[0],
                coolness: Math.floor(Math.random() * 10)
            }
        }

    });

}(APP));
