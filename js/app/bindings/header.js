define(
    ["jquery"],
    function( $ ){
        var HeaderBinding = {};

        HeaderBinding.header = function(){
            $( '#logo-container' ).on( "click", function( e ){
                $( this ).trigger( "resume.click.header.logo" );
                return false;
            });
        };

        return HeaderBinding;
    }
);
