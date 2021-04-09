$(document).ready(function () {
    $("#btn1").click(function () {
        $("p").append(" <b>Appended text</b>.");
    });

    $("#btn2").click(function () {
        $("ol").append("<li>Appended item</li>");
    });

    $("#btn3").click(function () {
        $("#large").remove();
    });

    $("#btn4").click(function () {
        alert("Text: " + $("#test").text());
    });
    $("#btn5").click(function () {
        alert("HTML: " + $("#test").html());
    });

    $.noConflict();
    jQuery(document).ready(function () {
        jQuery("#btn6").click(function () {
            jQuery("#writeUp").text("jQuery is still working!");
        });
    });



});