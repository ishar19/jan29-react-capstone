import { useEffect, useState } from "react";
import { genreNames } from "../utils/genreNames";
import browseImg from '../assets/browse.svg'

const genreIds = [
  {
    "id": 28,
    "name": "Action"
  },
  {
    "id": 12,
    "name": "Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 99,
    "name": "Documentary"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 10751,
    "name": "Family"
  },
  {
    "id": 14,
    "name": "Fantasy"
  },
  {
    "id": 36,
    "name": "History"
  },
  {
    "id": 27,
    "name": "Horror"
  },
  {
    "id": 10402,
    "name": "Music"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 878,
    "name": "Science Fiction"
  },
  {
    "id": 10770,
    "name": "TV Movie"
  },
  {
    "id": 53,
    "name": "Thriller"
  },
  {
    "id": 10752,
    "name": "War"
  },
  {
    "id": 37,
    "name": "Western"
  }
]

export default function Browse() {
  const genreList = genreNames.map(mId => {
    return genreIds.find(data => {
      if (mId.name === data.name)
        return data
      return null
    })
  });
  const [fetchedMovies, setFetchedMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "19252f08c11b65bf2e87afc735f1c84e"; // Replace with your actual API key
      const requests = genreList.map((genre) => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre.id}&page=1`;
        return fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .catch((error) => {
            console.error(error);
            return { results: [] }; // Return an empty array if there's an error
          });
      });

      try {
        const responses = await Promise.all(requests);
        setFetchedMovies(responses);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <img className="fixed right-[50px] top-4 h-[60px] w-[60px]"
      src={browseImg} alt="profImg" />
      <p className="font-single-day text-left text-4xl ml-4 pt-1 pb-2 text-[#72DB73] ">Super app</p>
      <p className="text-white ml-10 p-2 text-xl font-bold">Entertainment according to your choice</p>
      {genreNames.map((genre, index) => (
        <div key={genre.id}>
          <p className="ml-10 text-white font-semibold mb-2 text-xl">{genre.name} &#62;</p>

          <div className="grid grid-cols-4 ml-10 -gap-1">
            {fetchedMovies[index]?.results.slice(0, 4).map((movie) => (
              <div key={movie.id} className="flex flex-col gap-1 text-[#878787] font-medium mb-2" >
                <img className="h-[120px] w-[250px] rounded-lg border-white border-2"
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title}/>
                <p>{movie.title}</p>
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}
