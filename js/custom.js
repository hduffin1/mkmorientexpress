$(document).ready(function () {

    $(".content-holder, footer").css("display", "none");
    $(".content-holder, footer").fadeIn(1500);

    $("a.transition").click(function (event) {
        event.preventDefault();
        var linkLocation = this.href;
        $(".content-holder, footer").fadeOut(500, function () {
            window.location = linkLocation;
        });
    });

});