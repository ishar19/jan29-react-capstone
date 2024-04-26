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
     
        <p className="rounded-3xl text-white"
        style={{
          border: "3px solid #148A08",
          backgroundColor:"#148A08",
          padding: "8px",
          margin: "10px",
          width: "100px",
          height:"50px",
          display: "inline-block",
          cursor:"pointer"
        }}
      >
        {obj.name}&nbsp;&nbsp;<span className=" text-black text-xl" onClick={removeSelection}>X</span>
      </p>
     
    );
  }