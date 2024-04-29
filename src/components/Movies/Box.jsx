/* eslint-disable react/prop-types */
export default function Box({ data, selectedMovies, setSelectedMovies }) {
  function handleSelection() {
    if (selectedMovies.includes(data.id)) {
      setSelectedMovies(selectedMovies.filter((id) => id !== data.id));
    } else {
      setSelectedMovies([...selectedMovies, data.id]);
    }
  }
  return (
    <div
      className="movie-type-card"
      style={{
        border: selectedMovies.includes(data.id)
          ? "2px solid green"
          : "2px solid black",
        padding: "10px",
        margin: "10px",
        width: "200px",
        height: "200px",
        backgroundColor: data.backgroundColor || "red",
      }}
      onClick={handleSelection}
    >
      {data.name}
      {<img src={data.img} />}
    </div>
  );
}
