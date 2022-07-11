

let numberOfFilms;
function start () {
    numberOfFilms = +prompt('Сколько фильмоф вы уже посмотрели?', '');
    while(numberOfFilms == '' || numberOfFilms  == null || isNaN(numberOfFilms) ){
        numberOfFilms = +prompt('Сколько фильмоф вы уже посмотрели?', '');
    }
}
start();
const personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



// let i = 0;
// while(i < 2){
//     i++;
//     const a = prompt('Один из последних просмотреных фильмов?',''),
//     b = prompt('На сколько оценете его?','');
//     if(a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('Error');
//         i--;
//     }


// }
function rememberMyFilms(){
    
for(let i = 0; i< 2; i++){
    const a = prompt('Один из последних просмотреных фильмов?',''),
       b = prompt('На сколько оценете его?','');

   if(a != null && b != null && a != '' && b != '' && a.length < 50){
       personalMovieDB.movies[a] = b;
       console.log('done');
   } else {
       console.log('Error');
       i--;
   }
      
}

}
rememberMyFilms();



function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классный зритель");
    }else if (personalMovieDB.count >= 30){
        console.log("Вы - киноман");}
        else {
            console.log("Произошла ошибка");
        }
}
detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++ ){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1] = genre;
    }
}

writeYourGenres();

