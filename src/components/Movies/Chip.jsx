/* eslint-disable react/prop-types */
export default function Chip({
    data,
    allData,
    selectedMovies,
    setSelectedMovies,
  }) {
    function removeSelection() {
      setSelectedMovies(selectedMovies.filter((item) => item !== data));
    }
    const obj = allData.find((item) => item.id === data);
    return (
      <div className="movie-chip-container">
        <p className="movie-chip">
            {obj.name}&nbsp; &nbsp; <span onClick={removeSelection}>X</span>
        </p>
      </div>
      
    );
  }