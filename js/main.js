    function aboutMe(){
                $("#skills").hide(200);
                $("#aboutMe").show(200);
                $("#aboutbutton1").css("color","#e55102");
                $("#aboutbutton2").css("color","black");
            }
    function skills(){
                $("#aboutMe").hide(200);
                $("#skills").show(200);
                $("#aboutbutton1").css("color","black");
                $("#aboutbutton2").css("color","#e55102");
            }
            function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}