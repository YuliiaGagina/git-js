


const personalMovieDB = {
    count : 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
start: function (){
    personalMovieDB.count = +prompt('Сколько фильмоф вы уже посмотрели?', '');
    while(personalMovieDB.count == '' || personalMovieDB.count  == null || isNaN(personalMovieDB.count) ){
        personalMovieDB.count = +prompt('Сколько фильмоф вы уже посмотрели?', '');
    }

},

toggLeVisibleMyDB: function ()  {
    if (personalMovieDB.privat){
        personalMovieDB.privat = false;
    } else {
        personalMovieDB.privat = true;
    }
    },
showMyDB: function (hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
},
rememberMyFilms: function() {
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
},
writeYourGenres: function(){
    for(let i = 1; i <= 2; i++ ){
        let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
    if(genres == null || genres == '' ) {
        console.log(' Вы ввели некоректные данные или не ввели их вовсе');
        i--;
    } else {
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();
    }
 personalMovieDB.genres.forEach(( item, i) => {
           console.log(`Любимый жанр № ${i + 1} - это ${item} `);
        }); 



        // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
        
        // if(genre == null || genre == '' ) {
        //     console.log(' Вы ввели некоректные данные или не ввели их вовсе');
        //     i--;
        // } else{
        //     personalMovieDB.genres[i-1] = genre;
        // }
        // personalMovieDB.genres.forEach(( item, i) => {
        //     console.log(`Любимый жанр № ${i + 1} - это ${item} `);
        // }); 
    }
    
},
detectPersonalLevel: function () {
    if(personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классный зритель");
    }else if (personalMovieDB.count >= 30){
        console.log("Вы - киноман");}
        else {
            console.log("Произошла ошибка");
        }
},

};

personalMovieDB.start();
personalMovieDB.toggLeVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();








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











