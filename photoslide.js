const slider = document.querySelector("#lens-gallery");
const scroller = slider.querySelector('.scroll-container')
const photoItems = slider.querySelectorAll('.photo-item');
const cardCaptions = slider.querySelectorAll('.card-caption');
const prevButton = slider.querySelector('.prev-next-previous');
const nextButton = slider.querySelector('.prev-next-next');

let current = 0;

prevButton.addEventListener('click', () => {
    photoItems[current].classList.remove('current');
    cardCaptions[current--].classList.remove('current');
    photoItems[current].classList.add('current');
    cardCaptions[current].classList.add('current');
    scroller.scrollLeft -= 650;
    nextButton.disabled = false;
    (current == 0) ? prevButton.disabled = true : prevButton.disabled = false;
});

nextButton.addEventListener('click', () => {
    photoItems[current].classList.remove('current');
    cardCaptions[current++].classList.remove('current');
    photoItems[current].classList.add('current');
    cardCaptions[current].classList.add('current');
    scroller.scrollLeft += 650;
    prevButton.disabled = false;
    (current == photoItems.length - 1) ? nextButton.disabled = true : nextButton.disabled = false;
});

scroller.addEventListener('scroll',() => {
    photoItems[current].classList.remove('current');
    cardCaptions[current].classList.remove('current');
    const scrollPercentage = scroller.scrollLeft / (scroller.scrollWidth - scroller.clientWidth);
    current = Math.round(scrollPercentage * (photoItems.length - 1));
    photoItems[current].classList.add('current');
    cardCaptions[current].classList.add('current');
    (current == 0) ? prevButton.disabled = true : prevButton.disabled = false;
    (current == photoItems.length - 1) ? nextButton.disabled = true : nextButton.disabled = false;
});