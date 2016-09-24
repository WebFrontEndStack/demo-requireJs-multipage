define(function (require) {
    var $ = require('jquery'),
        lib = require('./lib'),
        controller = require('./controller/c3'),
        model = require('./model/m3'),
        backbone = require('backbone'),
        underscore = require('underscore');

    //A fabricated API to show interaction of
    //common and specific pieces.
    controller.setModel(model);
    $(function () {
        controller.render(lib.getBody());

        //Display backbone and underscore versions
        $('body')
            .append('<div>backbone version: ' + backbone.VERSION + '</div>')
            .append('<div>underscore version: ' + underscore.VERSION + '</div>');
    });
});
