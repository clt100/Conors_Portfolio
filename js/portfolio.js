$(document).ready(function(){
    $('.sidenav').sidenav();
    M.Sidenav.init();
    $(".collapsible").collapsible();
    $(".dropdown-trigger").dropdown();
    M.Collapsible.init()
    M.Dropdown.init()
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
    setTimeout(autoplay, 3000);
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 3000);
    }
});