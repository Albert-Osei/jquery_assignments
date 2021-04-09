$(document).ready(function () {
  $("p").click(function () {
    $(this).hide();
  });

    $("h2").dblclick(function () {
        $(this).hide();
    });

    $("#p1").hover(function () {
        alert("You entered p1!");
    },
        function () {
            alert("Bye! You now leave p1!");
        });

    $("input").focus(function () {
        $(this).css("background-color", "yellow");
    });
    $("input").blur(function () {
        $(this).css("background-color", "green");
    });

 
});
