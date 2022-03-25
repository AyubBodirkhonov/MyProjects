const btnNav = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header')
const btnSearch = document.querySelector('.btn-search')
const geoIcon = document.querySelector('#geo_icon')
const input = document.querySelector('.input')
btnNav.addEventListener('click', function () {
    header.classList.toggle('nav-open')
    btnSearch.classList.toggle('z_index')
    geoIcon.classList.toggle('z_index')
    input.removeAttribute('placeholder')
    input.classList.toggle('display');
})