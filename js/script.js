var $page = $('html, body');
$('a[href*="#"]').click(function () {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1200);
    return false;
});

var burger = document.querySelector('.menu_burger');
burger.addEventListener('click', function () {

    alert('Кто сделал клик???');

});