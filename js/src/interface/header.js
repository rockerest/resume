define(
    ["jquery"],
    function( $ ){
        var HeaderUi = function(){},
            toggleSpin;

        HeaderUi.prototype.spin = function( el ){
            toggleSpin( el, true );
        };

        HeaderUi.prototype.unSpin = function( el ){
            toggleSpin( el, false );
        };

        toggleSpin = function( el, on ){
            if( on ){
                $( el ).addClass( "fa-spin" );
            }
            else{
                $( el ).removeClass( "fa-spin" );
            }
        };

        return HeaderUi;
    }
);
