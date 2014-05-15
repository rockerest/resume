define(
    ["jquery", "moment", "intro"],
    function( $, moment, Intro ){
        var MainBinding = {},
            hasStyles = !$( "#calibration" ).is( ":visible" ),
            addStyleWarning, addInteractives, startup, bind,
            toggleElement, unpackExpandables, repackExpandables,
            hideOldWork;

        MainBinding.main = function(){
            if( hasStyles ){
                addInteractives();
                startup();
                bind();
            }
            else{
                addStyleWarning();
            }
        };

        addStyleWarning = function(){
            $( "body" ).prepend( "<h1>It looks like the style for this site failed to load, or you have CSS turned off.</h1><h2>All the content is below, as readable as possible but... I mean... It kinda looks like poo, don't you think?</h2>" );
        };

        addInteractives = function(){
            var buttonExpand = $( "<button></button>" )
                                    .addClass( "expand" )
                                    .append(
                                        $( "<i></i>" ).addClass( "fa fa-expand" )
                                    )
                                    .append( "&nbsp;&nbsp;More about this..." ),
                infoCircle = $( "<i></i>" ).addClass( "fa fa-info-circle" );

            $( "div.expandables" ).before( buttonExpand );
            $( "div.info" ).before( infoCircle.before( "&nbsp;&nbsp;" ) );
        };

        startup = function(){
            $( ".more" ).hide();
            $( ".expandables" ).hide();
            $( ".info" ).hide();
            hideOldWork();
        };

        bind = function(){
            var intro = Intro();
            intro.setOptions({
                steps: [
                    {
                        element: '#step-zero',
                        intro: "Hi there! My name is Tom Randolph.<br /><br />Here's a quick rundown of what's going on behind the scenes here.",
                        position: "right"
                    },
                    {
                        element: '#step-one',
                        intro: "Hover to open.<br />Click to stick.<br />Click again to unstick.",
                        position: "top"
                    },
                    {
                        element: '#step-two',
                        intro: "Same thing on these.",
                        position: "top"
                    },
                    {
                        element: '#step-three',
                        intro: "Work experiences can be toggled by clicking the employer.",
                        position: "top"
                    },
                    {
                        element: '.fa-info-circle',
                        intro: "More details about each experience are available by clicking the info icon.",
                        position: "right"
                    }
                ]
            });

            $( ".work-item h4, .volunteer-item h4" ).on( "click", function(){
                $(this).siblings().slideToggle();
            });

            $( ".fa-info-circle" ).on( "click", function(){
                $(this).siblings( ".info" ).slideToggle();
                return false;
            });

            $( "#startIntro" ).on({
                "click": function(){
                    intro.start();
                },
                "mouseenter": function(){
                    $("i", this).addClass( "fa-spin" );
                },
                "mouseleave": function(){
                    $("i", this).removeClass( "fa-spin" );
                }
            });

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

        hideOldWork = function(){
            var now = new moment(),
                oldest = now.subtract( "years", 5 ),
                endTime;

            $( "div.work-item" ).each( function( i, el ){
                endTime = $(el).data( "end" ) ? moment( $(el).data( "end" ) ) : moment();

                if( !endTime.isAfter( oldest ) ){
                    $(el).children().not("h4").hide();
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

        return MainBinding;
    }
);
