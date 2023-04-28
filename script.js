
    const number0Films = +prompt('Сколько фильмов вы уже просмотрели?', '');
    
    const personalMovieDB ={
        count: number0Films,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    }; 
    const answerOne = prompt('Один из последних просмотренных фильмов?', ''),
     answerTwo = prompt('Насколько оцените его?', ''),
     answerThree = prompt('Один из последних просмотренных фильмов?', ''),
     answerFour = prompt('Насколько оцените его?', '');
    
  personalMovieDB.movies[answerOne] = answerTwo;
  personalMovieDB.movies[answerThree] = answerFour;
console.log(personalMovieDB)


