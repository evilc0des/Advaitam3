$(document).ready(function(){

    $("#hamburger").click(function(){
        $(".navlist").slideToggle("slow");
    });
    $('a.current-page').click(function() {
       return false;
     });
});
