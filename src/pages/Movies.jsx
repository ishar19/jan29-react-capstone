import { Box, Chip } from "../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import actionImg from "../assets/boxes/action.svg";
import dramaImg from "../assets/boxes/drama.svg";
import romanceImg from "../assets/boxes/romance.svg";
import thrillerImg from "../assets/boxes/thriller.svg";
import westernImg from "../assets/boxes/western.svg";
import musicImg from "../assets/boxes/music.svg";
import fictionImg from "../assets/boxes/fiction.svg";
import horrorImg from "../assets/boxes/horror.svg";
import fantasyImg from "../assets/boxes/fantasy.svg";
const moviesData = [
  {
    id: 1,
    name: "Action",
    image: actionImg,
    backgroundColor: "#FF5209",
  },
  {
    id: 2,
    name: "Drama",
    image: dramaImg,
    backgroundColor: "#D7A4FF",
  },
  {
    id: 3,
    name: "Romance",
    image: romanceImg,
    backgroundColor: "#148A08",
  },
  {
    id: 4,
    name: "Thriller",
    image: thrillerImg,
    backgroundColor: "#84C2FF",
  },
  {
    id: 5,
    name: "Western",
    image: westernImg,
    backgroundColor: "#902500",
  },
  {
    id: 6,
    name: "Music",
    image: musicImg,
    backgroundColor: "#E61E32",
  },
  {
    id: 7,
    name: "Fiction",
    image: fictionImg,
    backgroundColor: "#6CD061",
  },
  {
    id: 8,
    name: "Horror",
    image: horrorImg,
    backgroundColor: "#7358FF",
  },
  {
    id: 9,
    name: "Fantasy",
    image: fantasyImg,
    backgroundColor: "#FF4ADE",
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
    <div className="flex flex-row items-center min-h-screen bg-black m-0 gap-40">
      <div className=" pl-10">
        <p className="font-single-day text-left text-6xl mb-12 text-[#72DB73]">
          Super app
        </p>

        <p className="text-white font-semibold text-5xl">
          Choose your entertainment <br />
          category
        </p>
        <div className="text-white grid grid-cols-4 pt-10 gap-0.5">
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

      <div className="grid grid-cols-3 p-20">
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
      <button
        className="fixed bottom-3 right-36 text-white bg-[#148A08] pr-4 pl-4 pt-2 pb-2 rounded-3xl text-xl"
        onClick={handleNextPage}
      >
        Next Page
      </button>
    </div>
  );
}
