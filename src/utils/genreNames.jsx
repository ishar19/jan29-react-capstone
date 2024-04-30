const selectedMovies = JSON.parse(localStorage.getItem("selectedMovies")); // [1,2,3]
const allData = JSON.parse(localStorage.getItem("allData"));

function computeGenreNames(selectedMovies, allData) {
  if (selectedMovies !== null && allData !== null) {
    return selectedMovies.map((id) => {
      return allData.find((movie) => movie.id === id);
    });
  } else {
    console.error("selectedMovies or allData is null");
    return [];
  }
}

export const genreNames = computeGenreNames(selectedMovies, allData);
