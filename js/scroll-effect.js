// Scrolling Function
$('nav li a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 1000);
    $('html').removeClass('nav-open');
    event.preventDefault();
});
