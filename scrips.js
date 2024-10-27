let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicators = document.querySelector('.indicators');
let dots = indicators.querySelectorAll('ul li');
let list = container.querySelector('.list');
let description = document.querySelector('.description');
let carInfo = document.querySelector('.car-information');
let title = document.querySelector('h2');

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

prevButton.onclick = () => {
    alert("nao sei como mudar isso desculpa tarik <3");
    list.style.setProperty('--calculation', active <= 0 ? 1 : -1);
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    updateSlider();
};

nextButton.onclick = () => {
    list.style.setProperty('--calculation', active >= lastPosition ? 1 : -1);
    active = active + 1 > lastPosition ? 0 : active + 1;
    updateSlider();
};

function updateSlider() {
    items.forEach((el, index) => {
        el.classList.toggle('active', index === active);
    });
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === active);
    });
}
