
const boxColors = ["#FF5209", "#D7A4FF", "#11B800", "#84C2FF", "#902500", "#7358FF", "#FF4ADE", "#E61E32", "#6CD061"];

export default function Box({ data, selectedMovies, setSelectedMovies }) {
  function handleSelection() {
    if (selectedMovies.includes(data.id)) {
      setSelectedMovies(selectedMovies.filter((id) => id !== data.id));
    } else {
      setSelectedMovies([...selectedMovies, data.id]);
    }
  }

  
  const colorIndex = (data.id - 1) % boxColors.length;

  return (
    <div
      className="text-white flex flex-col rounded-xl"
      style={{
        border: selectedMovies.includes(data.id)
          ? "3px solid #11B800"
          : "2px solid black",
        padding: "10px",
        margin: "10px",
        width: "180px",
        height: "175px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: boxColors[colorIndex],
      }}
      onClick={handleSelection}
    >
      {data.name}
      <img src={data.img} />
    </div>
  );
}
