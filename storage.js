function LStorage() {

}

LStorage.prototype.addMovieToStorage = function (newMovie) {
    let movies = this.checkMoviesFromStorage();

    movies.push(newMovie);

    localStorage.setItem('movies', JSON.stringify(movies));
}

LStorage.prototype.checkMoviesFromStorage = function () {
    let movies;

    if (localStorage.getItem('movies') === null) {
        movies = [];
    } else {
        movies = JSON.parse(localStorage.getItem('movies'));
    }
    return movies;
}

LStorage.prototype.deleteMovieFromStorage = function (movieTitle) {
    let movies = this.checkMoviesFromStorage();

    movies.forEach((movie, index) => {
        if (movie.title === movieTitle) {
            movies.splice(index, 1);
        }
    });

    localStorage.setItem('movies', JSON.stringify(movies));
}

LStorage.prototype.clearAllMoviesFromStorage = function () {
    localStorage.removeItem('movies');
}