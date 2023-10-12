const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};



for (let i = 0; i < 2; i++) {
    const a = prompt ('Один из последних просмотренных фильмов?', ''),
          b = prompt ('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }            
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);



function sayHello(userName) {
    let resultPhrase = 'Привет, ';
    resultPhrase += `${userName}`;
   return resultPhrase;
}

console.log(sayHello('John'));


function returnNeighboringNumbers(midNumber) {
    let resultArray = [];
    for (let i = 0; i <=2; i++) {
        resultArray[i] = midNumber -1 + i;
    }
    return resultArray;
}

console.log(returnNeighboringNumbers(6));


function getMathResult(baseNumber, progressNumber) {
    let resultStr = ''; 
    if (typeof(progressNumber || 'number')) {
        resultStr = `${baseNumber}`;
        return resultStr;
    }

    for (let i = 1; i <= progressNumber; i++) {
        let resNumber = baseNumber * i;
        if (i === progressNumber) {
            resultStr += `${resNumber}`;
        } else {
            resultStr += `${resNumber}---`;
        }
        
        
    }
    
    return resultStr;
}

console.log(getMathResult(3,10));
