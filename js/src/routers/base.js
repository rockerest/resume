define(
    [],
    function(){
        var RouterBase = function(){
                this.dmz = true;
                this.blacklist = [];
                this.whitelist = [];
            },
            recursiveObjectMerge;

        RouterBase.prototype.extend = function( one, two ){
            return recursiveObjectMerge( recursiveObjectMerge( {}, one ), two );
        };

        /****** Helpers ******/
        function recursiveObjectMerge( primary, overwrite ){
            var p;
            for( p in overwrite ){
                try{
                    //try an update
                    if( overwrite[p].constructor == Object ){
                        if (typeof primary[p] == "undefined" || primary[p] === null) {
                            primary[p] = {};
                        }

                        primary[p] = recursiveObjectMerge( primary[p], overwrite[p] );
                    }
                    else{
                        primary[p] = overwrite[p];
                    }
                }
                catch( e ){
                    // destination doesn't have that property, create and set it
                    primary[p] = overwrite[p];
                }
            }

            // primary is modified (it's a reference), but pass it back
            // to keep up the idea that this function returns a result
            return primary;
        }

        return RouterBase;
    }
);
