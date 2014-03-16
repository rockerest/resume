requirejs.config({
    "paths": {
        "lib":  "../../../vendor",

        "underscore": "../../../vendor/underscore/underscore",
        "jquery": ["//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min", "../../../vendor/jquery/dist/jquery.min" ],
        "moment": "../../../vendor/moment/moment"
    }
});

require(
    ["init"],
    function( Init ){
        Init.startApp();
    }
)
