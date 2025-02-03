document.addEventListener("DOMContentLoaded", function() {
  const tabList = document.querySelector('.topic-slider__tabs__tablist');
  const scrollLeftButton = document.querySelector('.topic-slider__tabs__btn.btn-left');
  const scrollRightButton = document.querySelector('.topic-slider__tabs__btn.btn-right');
  const scrollContainer = document.querySelector('.topic-slider__tabs__tablist-container');
  const tabItem = document.querySelectorAll('.topic-slider__tabs__tab');
  let index = 0;
  const scrollFor = 70;
  tabItem[index].classList.add('topic-slider__tabs__tab--active');
  scrollContainer.scrollLeft = 0;
  scrollLeftButton.addEventListener('click', function() {
    tabItem.forEach(tab => tab.classList.remove('topic-slider__tabs__tab--active'));
    if (index == 0) {
      // Если уже в начале
      index = tabItem.length - 1;
      tabItem[index].classList.add('topic-slider__tabs__tab--active');
      scrollContainer.scrollLeft = scrollContainer.scrollWidth;
    } else {
      index -= 1
      tabItem[index].classList.add('topic-slider__tabs__tab--active');
      scrollContainer.scrollBy({
        left: -scrollFor,
        behavior: 'smooth'
      });
    }
  });

  scrollRightButton.addEventListener('click', function() {
    tabItem.forEach(tab => tab.classList.remove('topic-slider__tabs__tab--active'));
    if (index == tabItem.length - 1) {
      // Если уже в конце
      index = 0;
      tabItem[index].classList.add('topic-slider__tabs__tab--active');
      scrollContainer.scrollLeft = 0;
    } else {
      index += 1
      tabItem[index].classList.add('topic-slider__tabs__tab--active');
      scrollContainer.scrollBy({
        left: scrollFor,
        behavior: 'smooth'
      });
    }
  });
  tabItem.forEach(tab => {
    tab.addEventListener('click', function (event) {
        event.preventDefault();
        tabItem.forEach(item => item.classList.remove('topic-slider__tabs__tab--active'));
        this.classList.add('topic-slider__tabs__tab--active');
        index = Array.from(tabItem).indexOf(this);
        scrollContainer.scrollLeft = scrollFor * index;
    })
  })
});