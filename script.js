const movieList = [];

function addMovie() {
  const name = document.getElementById('movieName').value;
  const description = document.getElementById('movieDescription').value;
  const image = document.getElementById('movieImage').files[0];
  
  if (name && description && image) {
    const reader = new FileReader();
    reader.onload = function(event) {
      const id = movieList.length + 1;
      const movie = { id, name, description, image: event.target.result };
      movieList.push(movie);
      displayMovies();
    };
    reader.readAsDataURL(image);
  }
}

function displayMovies() {
  const movieItems = document.getElementById('movieItems');
  movieItems.innerHTML = '';
  movieList.forEach((movie) => {
    const li = document.createElement('li');
    li.classList.add('movie-item');
    li.innerHTML = `
      <img src="${movie.image}" alt="${movie.name}">
      <div>
        <h3>${movie.name}</h3>
        <p>${movie.description}</p>
      </div>
    `;
    movieItems.appendChild(li);
  });
}

// Display existing movies (if any) when the page loads
document.addEventListener('DOMContentLoaded', displayMovies);
