$(document).ready(function () {
  $("#btn1").click(function () {
    $("#div3").fadeToggle(3000);
  });

    $("#flip").click(function () {
        $("#panel").slideToggle("slow");
    });

    var x = 0;
    $("div").scroll(function () {
        $("span").text(x += 1);
    });

    $("#btn2").click(function () {
        $("img").animate({
            left: 300
        });
    });
});
