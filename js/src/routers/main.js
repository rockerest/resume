define(
    ["routers/base", "controllers/main"],
    function( Base, Controller ){
        var Main = function( data ){
                this.data = data;
                this.dmz = true;
            },
            page = new Controller();

        Main.prototype = new Base();

        Main.prototype.register = function(){
            this.registerMain( this.data );
        };

        Main.prototype.registerMain = function( data ){
            var self = this;

            data.sammy.get( "#/", function( context ){
                page.main( data );
            });
        };

        return Main;
    }
);
