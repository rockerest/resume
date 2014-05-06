define(
    ["page", "bindings/main"],
    function( Page, Bindings ){
        var Main = function(){
            this.root = "body article div#main";
        };

        Main.prototype = new Page();

        Main.prototype.main = function( data ){
            this.data = data;

            this.render({
                "title": "Thomas O. Randolph :: Javascript Developer",
                "node": this.root,
                "mechanism": "output",
                "template": "content/main/main.html",
                "data": {},
                "bind": Bindings.main
            });
        };

        return Main;
    }
);
