$(function (){

    $("#navbar-toggler").blur(function (event) {
        var screenWidth=window.innerWidth;
        if(screenWidth<768){
            $("#collapsable-nav").collapse('hide');
        }
        
    });

});