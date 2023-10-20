$(document).ready(function () {


    $("#stream1_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
    });
    $("#stream2_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
    });
    $("#stream3_btn").on("click", function () {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
    });
    $("p").on("click", function () {
        $("p").css("color", "red");
    });
    $("p").mouseleave(function () {
        $("p").css("color", "black");
    });
    $("h2").onmouseenter(function () {
        $("h2").css("background-color", "lightblue");
    }).onmouseleave(function () {
        $("h2").css("background-color", "white");
    });

    $("#h2-html").onmouseenter(function () {
        $("#h2-html").css("font-size", "2em");
    }).onmouseleave(function () {
        $("#h2-html").css("font-size", "1em");
    });
    $("#h2-mysql").mouseenter(function () {
        $("#h2-mysql").css("font-size", "2em");
    }).mouseleave(function () {
        $("#h2-mysql").css("font-size", "1em");
    });
    $("#h2-python").mouseenter(function () {
        $("#h2-python").css("font-size", "2em");
    }).mouseleave(function () {
        $("#h2-python").css("font-size", "1em");
    });
    $("#h2-jquery").mouseenter(function () {
        $("#h2-jquery").css("font-size", "2em");
    }).mouseleave(function () {
        $("#h2-jquery").css("font-size", "1em");
    });
    $("#h2-django").mouseenter(function () {
        $("#h2-django").css("font-size", "2em");
    }).mouseleave(function () {
        $("#h2-django").css("font-size", "1em");
    });
    $("#h2-css").mouseenter(function () {
        $("#h2-css").css("font-size", "2em");
    }).mouseleave(function () {
        $("#h2-css").css("font-size", "1em");
    });

    $(".bottom_button").onmouseenter(function () {
        $("body").css("background-color", "black");
    }).onmouseleave(function () {
        $("body").css("background-color", "grey");
    });


}); 
