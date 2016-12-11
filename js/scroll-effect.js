// Scrolling Function for Desktop and Mobile
$('nav li a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 1000);
    $('html').removeClass('nav-open');
    gaia.misc.navbar_menu_visible = 0;
    $('#nav li a').remove();
     setTimeout(function(){
        $toggle.removeClass('toggled');
     }, 550);
    event.preventDefault();
});
