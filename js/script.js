
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt ('Один из последних просмотренных фильмов?', '').trim(),
              b = prompt ('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }            
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);

}
}

writeYourGenres();




function calculateVolumeAndArea(edgeLength) {
    if (edgeLength % 1 != 0 || edgeLength <= 0 || typeof(edgeLength) != 'number') {
        return console.log(`При вычислении произошла ошибка`);
    }
    let Volume = edgeLength*edgeLength*edgeLength;
    let Area = edgeLength*edgeLength*6;
    return console.log(`Объем куба: ${Volume}, площадь всей поверхности: ${Area}`);
}


calculateVolumeAndArea(5);


function getCoupeNumber(ticketNumber) {
        if (ticketNumber > 0 && ticketNumber <= 36 && ticketNumber % 1 == 0) {
            if (ticketNumber >=1 && ticketNumber <= 4) {
                return 1;
            } else if (ticketNumber >=5 && ticketNumber <= 8) {
                return 2;
            } else if (ticketNumber >=9 && ticketNumber <= 12) {
                return 3;
        } else if (ticketNumber >=13 && ticketNumber <= 16) {
            return 4;
        }  else if (ticketNumber >=17 && ticketNumber <= 20) {
            return 5;
        }  else if (ticketNumber >=21 && ticketNumber <= 24) {
            return 6;
        }  else if (ticketNumber >=25 && ticketNumber <= 28) {
            return 7;
        }  else if (ticketNumber >=29 && ticketNumber <= 32) {
            return 8;
        } else if (ticketNumber >=33 && ticketNumber <= 36) {
            return 9;
        } 
} else if (ticketNumber == 0 || ticketNumber > 36) {
    return 'Таких мест в вагоне не существует';
} else if (typeof(ticketNumber) != 'number' || ticketNumber < 0 || ticketNumber % 1 !== 0 ) {
    return 'Ошибка. Проверьте правильность введенного номера места';
}
}

getCoupeNumber('Hello');


function getTimeFromMinutes(countOfMinutes) {
    let hours = Math.floor(countOfMinutes/60);
    let minutes = countOfMinutes - hours*60;
    if (countOfMinutes < 0 || typeof(countOfMinutes) != 'number' || countOfMinutes % 1 !== 0 || countOfMinutes > 600 ) {
        return 'Ошибка, проверьте данные';
    } else if (hours == 1) {
        return `Это ${hours} час и ${minutes} минут`;
    } else if (countOfMinutes < 60 && countOfMinutes > 0 || countOfMinutes == 0) {
        return `Это 0 часов и ${minutes} минут`;
    } else if (hours == 2 || hours == 3 || hours == 4) {
        return `Это ${hours} часа и ${minutes} минут`;
    } else if (hours == 5 || hours == 6 || hours == 7 || hours == 8 || hours == 9 || hours == 10) {
        return `Это ${hours} часов и ${minutes} минут`;
}
}
getTimeFromMinutes(600);


function findMaxNumber(a, b, c ,d) {

    if (typeof(a) != 'number' || typeof(b) != 'number' || typeof(c) != 'number' || typeof(d) != 'number') {
        return 0;
    }
    let arrNumber =[];
    arrNumber[0] = a;
    arrNumber[1] = b;
    arrNumber[2] = c;
    arrNumber[3] = d;


    let maxNumber = 0;
    for (let i = 0; i <= 3; i++) {        
        if (arrNumber[i] > maxNumber) {
            maxNumber = arrNumber[i];
        }    
    }
    return maxNumber;
}
findMaxNumber(35, 5, 10, 25);



function fib(numberFib) {
    let resultStr = "";
 if (numberFib <= 0 || typeof(numberFib) != "number" || !Number.isInteger(numberFib)) {
    return "";
 } else if (numberFib === 1) {
    return "0";
 }
    let arrFib = [];
    arrFib[0] = 0;
    arrFib[1] = 1;
    for (let i = 2; i < numberFib; i++) {
        arrFib[i] = arrFib[i-1] + arrFib[i-2];
    } 
    resultStr = arrFib.join(" ");
    return resultStr;
}
fib(14.5);