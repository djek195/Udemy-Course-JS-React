"use strict";

const numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const firstQuestion = prompt('Однин из последних просмотренных фильмов?', ''),
      secondQuestion = prompt('на сколько оцените его?', ''),
      thirdQuestion = prompt('Однин из последних просмотренных фильмов?', ''),
      fourthQuestion = prompt('на сколько оцените его?', '');

personalMovieDB.movies[firstQuestion] = [secondQuestion];
personalMovieDB.movies[thirdQuestion] = [fourthQuestion];

console.log(personalMovieDB);