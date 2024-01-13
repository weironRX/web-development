$(document).ready(() => {
    $(".block__title").click(function() {
        if ($(this).parent().parent().hasClass("one")) {
            $(".block__title").not($(this)).removeClass("active")
            $(".block__title").not($(this)).next().slideUp(300)
        }
        $(this).toggleClass('active').next().slideToggle(100)
    })
});