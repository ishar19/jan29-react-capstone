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
      <p className=""
        style={{
          border: "1px solid #148A08",
          borderRadius:'35px',
          padding: "9px",
          margin: "15px",
          width: "120px",
          backgroundColor:"#148A08",
          color:"white",
          fontSize:"17px"
        }}
      >
        {obj.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-bold text-[#085C00] cursor-pointer" onClick={removeSelection}>X</span>
      </p>
    );
  }