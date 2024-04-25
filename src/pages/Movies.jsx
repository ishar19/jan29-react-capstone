import { Box, Chip } from "../components";
import { useState } from "react";
const moviesData = [
  {
    id: 1,
    name: "Action",
    img: "",
  },
  {
    id: 2,
    name: "Drama",
    img: "",
  },
  {
    id: 3,
    name: "Romance",
    img: "",
  },
  {
    id: 4,
    name: "Thriller",
    img: "",
  },
  {
    id: 5,
    name: "Western",
    img: "",
  },
  {
    id: 6,
    name: "Music",
    img: "",
  },
  {
    id: 7,
    name: "Fiction",
    img: "",
  },
  {
    id: 8,
    name: "Horror",
    img: "",
  },
  {
    id: 9,
    name: "Fantasy",
    img: "",
  },
];

export default function Movies() {
  const [selectedMovies, setSelectedMovies] = useState([]);
  return (
    <>
      {" "}
      <p>Movies page</p>
      <div
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
      <div
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
    </>
  );
}
