define(
    ["module"],
    function( module ){
        var Config = module.config();

        window.resume = window.resume || {};
        window.resume.config = Config;

        return Config;
    }
);
