define(
    ["jquery"],
    function( $ ){
        var Ui = function(){};

        Ui.prototype.init = function(){
            this.startup();

            this.bind();
        };

        Ui.prototype.startup = function(){
            $( ".more" ).hide();
        };

        Ui.prototype.bind = function(){
            $( "section" ).on({
                "mouseenter": function(){
                    $( ".more", this ).stop( true ).slideDown();
                },
                "mouseleave": function(){
                    $( ".more", this ).stop( true ).slideUp();
                }
            });
        };

        return Ui;
    }
);
