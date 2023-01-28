const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");

/*Цвет картинок слева и справа не совпадает, поэтому задаем 
переменные sidebar и mainSlide */
const sidebar = document.querySelector(".sidebar");
const container = document.querySelector(".container");
const mainSlide = document.querySelector(".main-slide");

/*Посчитаем кол-во картинок в нашем mainSlide */
const slidesCount = mainSlide.querySelectorAll("div").length;
/*sidebar.style.top = "-300vh" -это запись если мы не высчитываем
кол-во картинок, но их может быть не 4 а больше, поэтому пишем
формулу ниже */
/*Создаем переменную активного слайда */
let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

/*Вешаем обработчик событий при клике*/
upBtn.addEventListener("click", () => {
  changeSlide("up");
});
downBtn.addEventListener("click", () => {
  changeSlide("down");
});

/*Запустим ф-ю которая будет проверять, что если нажали вверх
то к индексу активного слайда +1 и заодно сделаем проверку,
т к у нас ограниченное кол-во слайдов (4-slidesCount) с 
индексами 0 1 2 3.То когда slidesCount=4, то индекс должен снова
стать на первый слайд 
Аналогично когда нажимаем вниз */
function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  /*Тут мы высчитываем высоту слайда, чтобы при нажатии стрелки
прокручивался весь слайд целиком ,а не его часть*/

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
