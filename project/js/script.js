/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
      <li class="promo__interactive-item">${i + 1} ${film}
      <div class="delete"></div>
      </li>
    `;

});





function factorial(n) {
    
    if (n <= 0 || n == 1) {
        return 1;
    }  
    
    if (n % 1 != 0 || typeof(n) != 'number') {
        return "error";
    }
    

    
    let i = n - 1;
    
    if (i == 1) {
        return n;
    } else {
        
        return n * factorial(i);
    }

}
console.log(factorial(6));

function factorial(n) {
    let resFact = n;
    for ( let i = 1; i < n; i++ ) {
        resFact *= n - i;
    }
    console.log(resFact);
}

factorial(5);