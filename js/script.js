var burger = document.querySelector('.menu_burger');
var list = document.querySelector('.nav_header');
burger.addEventListener('click', function () {
    list.classList.toggle('vidno');

});

var btnPhoto = document.querySelector('.btn_much_foto');
var gridPhoto = document.querySelector('.box3_content');
var allPhotoHeight = document.querySelector('.box3_down');
btnPhoto.addEventListener('click', function () {
    gridPhoto.classList.toggle('all_grid_photo');
    allPhotoHeight.classList.toggle('box3_down_media');
    btnPhoto.classList.toggle('btn_all_foto');
    if (btnPhoto.textContent == 'скрыть') {
        btnPhoto.textContent = 'еще фото';
    } else(btnPhoto.textContent = 'скрыть');

});