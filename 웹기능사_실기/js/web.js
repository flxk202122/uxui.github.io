$(document).ready(function () {
    //화면이 준비되면 실행하라.
    $("h1 a").html("다지워")
    $("#gnb > li").eq(1).find("a").eq(0).html("네이버")
    $("#gnb > li").eq(2).find(".d2ul li").eq(0).find("a").html("구글")

    $("#gnb > li:eq(2) li:eq(0) a").html("구글");
    // $("body").html("")

    // attr(속성)
    //모든 링크 처리 안되게.
    $("a").attr("href", "#none")
    $("h1 img").attr("src", "logo.jpg")

    // toggleClass, addClass, removeClass
    $("h1 img").addClass("on")

    //css(스타일, 값)
    $("body").css("background", "lightblue")


    $("img[src$='.gif']").css("display", "none")

    $("a[href='']").css("display", "none")
})


