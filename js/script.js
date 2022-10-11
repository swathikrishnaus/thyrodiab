$(document).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > 50)
        $(".navbar").addClass("nav-shadow")
    else
        $(".navbar").removeClass("nav-shadow")
})








// ----------------------filter gallery----------------------------

$(".book-now-btn").click(function () {
    var divID = $(this).attr("btn-for");
    $(".place").addClass("d-none");
    $("#" + divID).removeClass("d-none");
    $(".book-now-btn").removeClass("active");
    $(this).addClass("active");
})

// ----------------------filter gallery----------------------------
