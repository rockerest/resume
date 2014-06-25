define(
    ["jquery"],
    function( $ ){
        var HeaderBinding = {};

        HeaderBinding.header = function(){
            $( '#logo-container' ).on( "click", function( e ){
                $( this ).trigger( "resume.click.header.logo" );
                return false;
            });

            $( '#startIntro' ).on( "click", function(){
                $( this ).trigger( "resume.click.main/help/start" );
            });
        };

        return HeaderBinding;
    }
);
