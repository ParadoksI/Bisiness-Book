document.addEventListener("DOMContentLoaded", function() {
    const scrollLeftButton = document.querySelector('.topic-slider__tabpanel__btn.btn-left');
    const scrollRightButton = document.querySelector('.topic-slider__tabpanel__btn.btn-right');
    const scrollContainer = document.querySelector('.topic-slider__tabpanel-container');
    const tabItem = document.querySelectorAll('.topic-slider__tabpanel .teaser__item');
    const scrollFor = 220;
    let index = 0;  
    tabItem[index].classList.add('topic-slider__tabs__tab--active');
    scrollContainer.scrollLeft = 0;
    scrollLeftButton.addEventListener('click', function() {
        if (scrollContainer.scrollLeft === 0) {
            // Если уже в начале
            scrollContainer.scrollLeft = scrollContainer.scrollWidth;
        } else {
            scrollContainer.scrollBy({
            left: -scrollFor,
            behavior: 'smooth'
            })
        }
    });
    scrollRightButton.addEventListener('click', function() {
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.offsetWidth;
        if (scrollContainer.scrollLeft >= maxScrollLeft) {
            // Если уже в конце
            scrollContainer.scrollLeft = 0;
        } else {
            scrollContainer.scrollBy({
            left: scrollFor,
            behavior: 'smooth'
            })
        }
    });
});