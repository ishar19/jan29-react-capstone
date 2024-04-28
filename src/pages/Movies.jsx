import { Box, Chip } from "../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const moviesData = [
  {
    id: 1,
    name: "Action",
    img: "/images/action.png",
  },
  {
    id: 2,
    name: "Drama",
    img: "/images/drama.png",
  },
  {
    id: 3,
    name: "Romance",
    img: "/images/romance.png",
  },
  {
    id: 4,
    name: "Thriller",
    img: "/images/thriller.png",
  },
  {
    id: 5,
    name: "Western",
    img: "/images/western.png",
  },
  {
    id: 6,
    name: "Music",
    img: "/images/music.png",
  },
  {
    id: 7,
    name: "Fiction",
    img: "/images/fiction.png",
  },
  {
    id: 8,
    name: "Horror",
    img: "/images/horror.png",
  },
  {
    id: 9,
    name: "Fantasy",
    img: "/images/fantasy.png",
  },
];

export default function Movies() {
  const [selectedMovies, setSelectedMovies] = useState([]);
  const navigate = useNavigate();
  const handleNextPage = () => {
    if (selectedMovies.length < 3) {
      alert("Please select atleast 3 movies");
    } else {
      localStorage.setItem("selectedMovies", JSON.stringify(selectedMovies));
      localStorage.setItem("allData", JSON.stringify(moviesData));
      navigate("/browse");
    }
  };
  return (
    <div className="bg-black overflow-auto ">
      <div className=' flex'>
        <div className="left">
          <div className='text-[#72DB73] m-10 mt-5  title'>Super app</div>
          <div className=' text-white pic-title m-10 mt-5 '>
            <p className="text-[40px]">Choose your </p>
            <p className="text-[35px]">entertainment</p>
            <p className="text-[35px]">category</p>
          </div>
          <div className="flex flex-wrap"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
          >
       {selectedMovies.map((data) => {
            return (
            
                <Chip
                key={data.id}
                data={data}
                allData={moviesData}
                selectedMovies={selectedMovies}
                setSelectedMovies={setSelectedMovies}
              />
              
            );
          })}
       </div>

        </div>

       


        <div className="ml-[190px]"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {moviesData.map((data) => {
            return (
              <Box
                key={data.id}
                data={data}
                selectedMovies={selectedMovies}
                setSelectedMovies={setSelectedMovies}
              />
            );
          })}
        </div>
      </div>
      <button className="bg-[#148A08] text-white font-medium rounded-full text-sm px-5 py-2.5 text-center float-end mt-[-57px] " onClick={handleNextPage}>Next Page</button>
    </div>
  );
}
