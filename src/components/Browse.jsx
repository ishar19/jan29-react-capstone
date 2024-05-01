/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import profileImg from '../assets/image 15.png'
import { NavLink } from 'react-router-dom';

function Browse() {
  const moviesList = {
    "genres": [
      { "id": 28, "name": "Action" },
      { "id": 12, "name": "Adventure" },
      { "id": 16, "name": "Animation" },
      { "id": 35, "name": "Comedy" },
      { "id": 80, "name": "Crime" },
      { "id": 99, "name": "Documentary" },
      { "id": 18, "name": "Drama" },
      { "id": 10751, "name": "Family" },
      { "id": 14, "name": "Fantasy" },
      { "id": 36, "name": "History" },
      { "id": 27, "name": "Horror" },
      { "id": 10402, "name": "Music" },
      { "id": 9648, "name": "Mystery" },
      { "id": 10749, "name": "Romance" },
      { "id": 878, "name": "Science Fiction" },
      { "id": 10770, "name": "TV Movie" },
      { "id": 53, "name": "Thriller" },
      { "id": 10752, "name": "War" },
      { "id": 37, "name": "Western" }
    ]
  };

  const selectedMovies = localStorage.getItem("selectedMovies");
  console.log(selectedMovies); // Action, Drama, Romance

  const selectedMoviesArray = selectedMovies.split(",");
  const selectedMoviesInList = moviesList.genres.filter((genre) =>
    selectedMoviesArray.includes(genre.name)
  );

  const [fetchedMovies, setFetchedMovies] = useState({});

  useEffect(() => {
    if(selectedMoviesInList.length > 0) {
      selectedMoviesInList.forEach((genre) => {
        const url = `https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=${genre.id}&page=1`;
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "cc75d09fd8msh230b620a2d0db34p1aa20fjsne556332e3ae2", // api key
            "X-RapidAPI-Host": "advanced-movie-search.p.rapidapi.com",
          },
        };
        fetch(url, options)
          .then(async (response) => {
            const res = await response.json(); // Parse response as JSON
            setFetchedMovies((prev) => ({
              ...prev,
              [genre.id]: res.results,
            }));
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      });
    }
  }, []); // Fetch data only once when component mounts

  return (
    <div className='bg-[#000000] text-white'>
      <p className='text-4xl text-[#72DB73] relative float-left' style={{ fontFamily: 'Single Day' }}>Super app</p>
      <h1 className='text-xl text-white font-bold m-4'>Entertainment according to your choice</h1>
      <p className='text-[#878787]'>Tip: Wait for some time & refresh Page to see your desired choice</p>
      <div className='w-10 h-10 rounded-full relative float-right m-4' style={{borderRadius: '50%'}}>
        <NavLink to='/dashboard' >
        <img className='rounded-full w-10 h-10' src={profileImg} alt='' style={{borderRadius: '50%'}}/>
        </NavLink>
      </div>
      {selectedMoviesInList.map((genre) => (
        <div key={genre.id} className='m-2'>
          <h2 className='text-[#878787] float-left'>{genre.name}</h2>
          <div
            className='grid grid-cols-3'
          >
            {fetchedMovies[genre.id]?.map((movie) => (
              <div key={movie.id} className='w-30 h-15'>
                <p>{movie.original_title}</p>
                <img
                  src={`https://image.tmdb.org/t/p/w20/${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

  );
}

export default Browse;
