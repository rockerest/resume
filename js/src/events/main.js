define(
    ["jquery", "interface/main"],
    function( $, ui ){
        var MainEvents = function(){},
            MainUi = new ui();

        MainEvents.prototype.registerEvents = function(){
            this.registerMainEvents();
        };

        MainEvents.prototype.registerMainEvents = function(){
            $( document ).on( "resume.click.main/help/start", function( e ){
                MainUi.startIntroduction();
            });
        };

        return MainEvents;
    }
);
