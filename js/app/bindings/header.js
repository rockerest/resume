define(
    ["jquery", "interface/header"],
    function( $, ui ){
        var HeaderBinding = {},
            HeaderUi = new ui();

        HeaderBinding.header = function(){
            $( '#logo-container' ).on( "click", function( e ){
                $( this ).trigger( "resume.click.header.logo" );
                return false;
            });

            $( '#startIntro' ).on({
                "click": function(){
                    $( this ).trigger( "resume.click.main/help/start" );
                },
                "mouseenter": function(){
                    HeaderUi.spin( $( "i", this)[0] );
                },
                "mouseleave": function(){
                    HeaderUi.unSpin( $( "i", this)[0] );
                }
            });
        };

        return HeaderBinding;
    }
);
