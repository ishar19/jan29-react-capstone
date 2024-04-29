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
      style={{
        border: selectedMovies.includes(data.id)
          ? "4px solid #11B800"
          : "2px solid black",
        padding: "10px",
        margin: "8px",
        width: "160px",
        height: "160px",
        borderRadius: "20px",
        backgroundColor: data.backgroundColor,
      }}
      onClick={handleSelection}
    >
      <p className="text-white text-xl">{data.name}</p>
      <br />
      <img
        style={{
          borderRadius: "5px",
          margin: "",
          scale: "1.1",
        }}
        src={data.image}
        alt={data.name}
      />
    </div>
  );
}
