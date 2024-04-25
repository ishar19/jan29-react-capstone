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
    <p
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        display: "inline-block",
        width: "80px",
      }}
    >
      {obj.name}&nbsp; &nbsp; <span onClick={removeSelection}>X</span>
    </p>
  );
}
