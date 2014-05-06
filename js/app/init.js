define(
    ["router", "ui", "event"],
    function( Router, Ui, Events ){
        var Init = {},
            Ui = new Ui();

        Init.startApp = function(){
            Router.start();
            Events.startup();
            Ui.init();
        };

        return Init;
    }
);
