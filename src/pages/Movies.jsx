import { Box, Chip } from "../components";
import { useState } from "react";
import '../components/Movies/index.css'

const moviesData = [
  {
    id: 1,
    name: "Action",
    img: "../../assets/movie_type/action_image.png",
  },
  {
    id: 2,
    name: "Drama",
    img: "../../assets/movie_type/drama_image.png",
  },
  {
    id: 3,
    name: "Romance",
    img: "../../assets/movie_type/romance_image.png",
  },
  {
    id: 4,
    name: "Thriller",
    img: "../../assets/movie_type/thriller_image.png",
  },
  {
    id: 5,
    name: "Western",
    img: "../../assets/movie_type/western_image.png",
  },
  {
    id: 6,
    name: "Music",
    img: "../../assets/movie_type/music_image.png",
  },
  {
    id: 7,
    name: "Fiction",
    img: "../../assets/movie_type/fiction_image.png",
  },
  {
    id: 8,
    name: "Horror",
    img: "../../assets/movie_type/horror_image.png",
  },
  {
    id: 9,
    name: "Fantasy",
    img: "../../assets/movie_type/fantasy_image.png",
  },
];

export default function Movies() {
  const [selectedMovies, setSelectedMovies] = useState([]);
  return (
    <>
      <div className="movies-container">
        <div className="movies-main-section">
          <div className="movies-category-selection">
            <div className="movies-category-selection-area">
              <div>
                <p className="app-name">Super App</p>
              </div>
              <div>
                <p style={{margin : '0px'}} className="movie-chooses-cateegory-text">Choose your entertainment category</p>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
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
          </div>
          <div className="all-movie-types">
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
          </div>
        </div>

        <div className="movies-footer">
            <div>Next Page</div>
        </div>
      </div>
      
    </>
  );
}