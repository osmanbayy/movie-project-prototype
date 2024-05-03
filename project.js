//Selecting form element
const form = document.getElementById('movie-form');
const titleElement = document.getElementById('title');
const directorElement = document.getElementById('director');
const urlElement = document.getElementById('url');
const secondCardBody = document.querySelectorAll('.card-body')[1];
const clearBtn = document.getElementById('clear-movies')

//Starting UI Object
const ui = new UI();

//Create storage object
const storage = new LStorage();

//Loading all events

eventListeners();

function eventListeners() {

    form.addEventListener('submit', addMovie);

    document.addEventListener('DOMContentLoaded', () => {
        let movies = storage.checkMoviesFromStorage();
        ui.loadAllMovies(movies);
    });

    secondCardBody.addEventListener('click', deleteMovie);

    clearBtn.addEventListener('click', clearAllMovies);
}

function addMovie(event) {

    const title = titleElement.value.trim();
    const director = directorElement.value.trim();
    const url = urlElement.value.trim();

    if (title === '' || director === '' || url === '') {
        //Error message
        ui.displayMessages('Fill in all fields!', 'danger');
    } else {
        //New movie
        const newMovie = new Movie(title, director, url);
        //Adding movie to interface
        ui.addMovieToUI(newMovie);
        //Adding movie to LocalStorage
        storage.addMovieToStorage(newMovie);
        //Show success message
        ui.displayMessages('Movie Added Successfully!', 'succes');
    }


    ui.clearInputs(titleElement, directorElement, urlElement);

    event.preventDefault();
}

function deleteMovie(event) {

    if (event.target.id === 'delete-movie') {

        ui.deleteMovieFromUI(event.target);

        storage.deleteMovieFromStorage(event.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        ui.displayMessages('Movie Deleted Successfully!', 'success');
    }
}

function clearAllMovies() {
    ui.clearAllMoviesFromUI();
    storage.clearAllMoviesFromStorage();
}