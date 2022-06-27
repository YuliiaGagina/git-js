

const numberOfFilms = +prompt('Сколько фильмоф вы уже посмотрели?', '');
const personalMovieDB = {
    count : numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних просмотреных фильмов?',''),
      b = prompt('На сколько оценете его?',''),
      c = prompt('Один из последних просмотреных фильмов?',''),
      d = prompt('На сколько оценете его?','');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);