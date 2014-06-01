requirejs.config({
    "urlArgs": "_=" + (new Date()).getTime(),
    "paths":{
        "lib":          "../../vendor",

        "jquery":       ["//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min", "../../vendor/jquery/jquery"],
        "sammy":        "../../vendor/sammy/lib/sammy",
        "underscore":   "../../vendor/underscore/underscore",
        "moment":       "../../vendor/moment/moment",
        "cookies":      "../../vendor/cookies/src/cookies.min",
        "intro":        "../../vendor/intro/intro"
    },
    "shim":{
        "sammy":{
            "deps": ["jquery"]
        }
    },
    "config":{
        "config":{
            "routers":[
                "error",
                "main"
            ],
            "events":[
                "header",
                "main"
            ]
        }
    }
});

require(
    ["jquery", "init", "config"],
    function( $, Init ){
        $(function(){
            Init.startApp();
        });
    }
);
