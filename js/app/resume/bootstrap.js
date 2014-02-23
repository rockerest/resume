requirejs.config({
    "urlArgs": "_=" + (new Date()).getTime(),
    "paths": {
        "lib":  "../../lib",

        "underscore": "../../underscore/underscore",
        "jquery": ["//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min", "../../jquery/dist/jquery.min" ]
    }
});

require(
    ["init"],
    function( Init ){
        Init.startApp();
    }
)
