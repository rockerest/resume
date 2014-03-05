define(
    ["jquery", "underscore"],
    function( $, _ ){
        var Ui = function(){},
            toggleElement, unpackExpandables, repackExpandables;

        Ui.prototype.init = function(){
            this.startup();

            this.bind();
        };

        Ui.prototype.startup = function(){
            $( ".more" ).hide();
            $( ".expandables" ).hide();
        };

        Ui.prototype.bind = function(){
            $( ".more" ).parent().on({
                "click": function(){
                    toggleElement( $(".more", this) );
                },
                "touchstart": function(){
                    toggleElement( $(".more", this) );
                },
                "mouseenter": function(){
                    var el = $( ".more", this );
                    if( !el.data( "frozen" ) && !el.data( "locked" ) ){
                        $( ".more", this ).stop( true ).slideDown();
                    }
                },
                "mouseleave": function(){
                    var el = $( ".more", this );
                    if( !el.data( "frozen" ) && !el.data( "locked" ) ){
                        $( ".more", this ).stop( true ).slideUp();
                    }
                }
            });

            $( ".expand" ).on({
                "click": function( e ){
                    var button      = $( this ),
                        moreBlock   = button.closest( ".more" ),
                        current     = moreBlock.closest( ".column" ),
                        html        = button.html();

                    if( html.indexOf( "More" ) > -1 ){
                        html = html.replace( "More", "Less" );
                        unpackExpandables( $( ".expandables", current ).children(), current );

                        moreBlock.data( "locked", true );
                    }
                    else if( html.indexOf( "Less" ) > -1 ){
                        html = html.replace( "Less", "More" );
                        repackExpandables( current.siblings() );

                        moreBlock.data( "locked", false );
                        moreBlock.data( "frozen", false );
                    }

                    button
                        .html( html )
                        .find( ".fa-expand, .fa-compress" )
                        .toggleClass( "fa-expand fa-compress" );

                    e.stopPropagation();
                }
            });
        };

        toggleElement = function( element ){
            var frozen = typeof element.data( "frozen" ) !== "undefined" ? element.data( "frozen" ) : false,
                locked = typeof element.data( "locked" ) !== "undefined" ? element.data( "locked" ) : false;

            if( !locked ){
                if( frozen ){
                    element.show();
                }

                element.data( "frozen", !frozen );
            }
        };

        unpackExpandables = function( expanders, column ){
            column.siblings().hide();

            var befores = _( expanders ).filter( function( el ){
                    return $( el ).data( "placement" ) === "before";
                }),
                afters = _( expanders ).filter( function( el ){
                    return $( el ).data( "placement" ) === "after";
                }),
                unpack = function( list, sibling ){
                    var i, clone;

                    for( i = list.length; i > 0; i-- ){
                        clone = $( list[i - 1] )
                            .clone()
                            .attr( "class", sibling.attr( "class" ) );

                        if( clone.data( "placement" ) === "before" ){
                            clone.insertBefore( sibling );
                        }
                        else if( clone.data( "placement" ) === "after" ){
                            clone.insertAfter( sibling );
                        }
                    }
                };

            unpack( befores, column );
            unpack( afters, column );
        };

        repackExpandables = function( sibs ){
            sibs.each( function( i, el ){
                if( $(el).attr( "data-order" ) ){
                    $(el).remove();
                }
                else{
                    $(el).show();
                }
            });
        };

        return Ui;
    }
);
