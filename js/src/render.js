define(
    ["jquery", "underscore", "async", "containers/template"],
    function( $, _, Async, TemplateStorage ){
        var Render = function( templatePath ){
            var self = this,
                tmplStor = new TemplateStorage(),
                path = templatePath + "?_=" + (new Date()).getTime();

            this.template = this.finalContent = this.container = this.jQXhr = undefined;

            if( path ){
                var tmpl = tmplStor.get( path );

                if( tmpl ){
                    self.jQXhr = this.promise( tmpl ).done( function( content ){
                        self.template = content;
                    });
                }
                else{
                    self.jQXhr = $.get( path, function( content ){
                        self.template = _.template( content );
                        tmplStor.set( path, self.template );
                    });
                }
            }
            else{
                self.jQXhr = this.promise( "" ).done( function( content ){
                    self.template = _.template( content );
                });
            }

            return this;
        };

        Render.prototype = new Async();

        Render.prototype.generate = function( data ){
            var self = this;

            this.ready( self.jQXhr, function(){
                self.finalContent = self.template( data );
            });

            return this;
        };

        Render.prototype.output = function( out ){
            var self = this;

            this.ready( self.jQXhr, function(){
                if( out.jquery ){
                    self.container = out;
                }
                else if( typeof out === 'string' ){
                    self.container = $( out );
                }
                else{
                    throw new TypeError( "Unknown output. Renderer accepts a DOM selector string or a jQuery object." );
                }

                self.container.html( self.finalContent );
            });

            return this;
        };

        Render.prototype.addTo = function( out ){
            var self = this;

            this.ready( self.jQXhr, function(){
                if( out.jquery ){
                    self.container = out;
                }
                else if( typeof out === 'string' ){
                    self.container = $( out );
                }
                else{
                    throw new TypeError( "Unknown output. Renderer accepts a DOM selector string or a jQuery object." );
                }

                self.container.append( self.finalContent );
            });

            return this;
        };

        Render.prototype.raw = function( callback ){
            var self = this;

            this.ready( self.jQXhr, function(){
                callback( self.finalContent );
            });
        };

        Render.prototype.bind = function( callback, context ){
            var self = this;

            this.ready( self.jQXhr, function(){
                callback.call( context, self.container );
            });

            return this;
        };

        return Render;
    }
);
