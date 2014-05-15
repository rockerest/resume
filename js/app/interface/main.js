define(
    ["jquery", "intro"],
    function( $, Intro ){
        var MainUi = function(){};

        MainUi.prototype.startIntroduction = function(){
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

            intro.start();
        };

        return MainUi;
    }
);
