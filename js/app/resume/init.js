define(
    ["jquery", "ui"],
    function( $, Ui ){
        var Init = {};

        Ui = new Ui();

        Init.startApp = function(){
            $(function(){
                Ui.init();
            });
        };

        return Init;
    }
);
