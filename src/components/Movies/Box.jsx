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
      <div className="p-[10px] m-3 w-[180px] h-[160px]"
        style={{
          border: selectedMovies.includes(data.id)
            ? "4px solid #11B800"
            : "2px solid black",
          borderRadius:"20px",
          backgroundColor: data.backgroundColor
        }}
        onClick={handleSelection}
      >
        <p className="text-white text-xl">{data.name}</p><br />
        <img
        style={{
          borderRadius:"5px",
          scale:'1.1',
      }}
        src={data.image} alt={data.name}/>
      </div>
    );
  }
