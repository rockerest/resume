define(
    ["jquery"],
    function( $ ){
        var Init = {};

        Init.startApp = function(){
            $(function(){
                console.log( "Started" );
            });
        };

        return Init;
    }
)
