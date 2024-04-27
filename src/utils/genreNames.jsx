const selectedMovies = JSON.parse(localStorage.getItem("selectedMovies")); // [1,2,3]
const allData = JSON.parse(localStorage.getItem("allData"));
export const genreNames = selectedMovies.map((id) => {
  return allData.find((movie) => movie.id === id);
});
