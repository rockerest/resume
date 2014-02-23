$( document ).ready( function() {
							  $( '.toggler' ).click( function()
															 {
																 $( this ).parent().next( '.close_this' ).slideToggle();
																 if( $( this ).parent().next().hasClass( 'hidden' ) )
																  {
																	  $( this ).html( "&#9660;" );
																	  $( this ).parent().next().removeClass( 'hidden' );
																  }
																  else
																  {
																	  $( this ).html( "&#9658;" );
																	  $( this ).parent().next().addClass( 'hidden' );
																  }
															 });
							  }
							  );