import { useEffect } from "react";
import { useState } from "react";
const genreIds = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];
import { genreNames } from "../utils/genreNames";
export default function Browse() {
  const [fetchedMovies, setFetchedMovies] = useState(
    { "page": 1, "results": [{ "adult": false, "backdrop_path": "https://image.tmdb.org/t/p/original/qrGtVFxaD8c7et0jUtaYhyTzzPg.jpg", "genre_ids": [28, 878, 12], "id": 823464, "original_language": "en", "original_title": "Godzilla x Kong: The New Empire", "overview": "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.", "popularity": 2372.572, "poster_path": "https://image.tmdb.org/t/p/original/bQ2ywkchIiaKLSEaMrcT6e29f91.jpg", "release_date": "2024-03-27", "title": "Godzilla x Kong: The New Empire", "video": false, "vote_average": 6.644, "vote_count": 789 }, { "adult": false, "backdrop_path": "https://image.tmdb.org/t/p/original/4woSOUD0equAYzvwhWBHIJDCM88.jpg", "genre_ids": [28, 27, 53], "id": 1096197, "original_language": "en", "original_title": "No Way Up", "overview": "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.", "popularity": 2768.363, "poster_path": "https://image.tmdb.org/t/p/original/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg", "release_date": "2024-01-18", "title": "No Way Up", "video": false, "vote_average": 6.471, "vote_count": 476 }, { "adult": false, "backdrop_path": "https://image.tmdb.org/t/p/original/FUnAVgaTs5xZWXcVzPJNxd9qGA.jpg", "genre_ids": [878, 28, 18, 12], "id": 934632, "original_language": "en", "original_title": "Rebel Moon — Part Two: The Scargiver", "overview": "The rebels gear up for battle against the ruthless forces of the Motherworld as unbreakable bonds are forged, heroes emerge — and legends are made.", "popularity": 2477.048, "poster_path": "https://image.tmdb.org/t/p/original/cxevDYdeFkiixRShbObdwAHBZry.jpg", "release_date": "2024-04-19", "title": "Rebel Moon — Part Two: The Scargiver", "video": false, "vote_average": 6.133, "vote_count": 533 }, { "adult": false, "backdrop_path": "https://image.tmdb.org/t/p/original/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg", "genre_ids": [16, 28, 10751, 35, 14], "id": 1011985, "original_language": "en", "original_title": "Kung Fu Panda 4", "overview": "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.", "popularity": 2020.311, "poster_path": "https://image.tmdb.org/t/p/original/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg", "release_date": "2024-03-02", "title": "Kung Fu Panda 4", "video": false, "vote_average": 7.163, "vote_count": 1372 }, { "adult": false, "backdrop_path": "https://image.tmdb.org/t/p/original/qnVm19Vu2Sc14LoEj82pmqAYr3p.jpg", "genre_ids": [12, 28, 18], "id": 845111, "original_language": "fr", "original_title": "Les trois mousquetaires : Milady", "overview": "D'Artagnan, on a quest to rescue the abducted Constance, runs into the mysterious Milady de Winter again. The tension between the Catholics and the Protestants finally escalates, as the king declares war — forcing the now four musketeers into battle. But as the war goes on, they are tested physically, mentally and emotionally.", "popularity": 1352.91, "poster_path": "https://image.tmdb.org/t/p/original/rtosxP5sXuoRFPH4sVbMccLIPiV.jpg", "release_date": "2023-12-13", "title": "The Three Musketeers: Milady", "video": false, "vote_average": 6.532, "vote_count": 342 }, { "adult": false, "backdrop_path": "https://image.tmdb.org/t/p/original/ilK1JRbMjo4sMJtNKLOKnqRf1RH.jpg", "genre_ids": [10752, 28, 36], "id": 976906, "original_language": "en", "original_title": "Spitfire Over Berlin", "overview": "August 1944. With the American Eighth Air Force poised to strike over Nazi Germany, British Intelligence learns that they could be flying into a deadly trap. With only hours to spare, Flight Lieutenant Edward Barnes must fly a life and death mission over Berlin in his unarmed Spitfire to obtain photographic evidence and save the lives of 1200 men.", "popularity": 1361.985, "poster_path": "https://image.tmdb.org/t/p/original/xtPPOPTad1qopK6uDe3VlYUa22o.jpg", "release_date": "2022-05-13", "title": "Spitfire Over Berlin", "video": false, "vote_average": 3.4, "vote_count": 11 }, { "adult": false, "backdrop_path": "https://image.tmdb.org/t/p/original/fUC5VsQcU3m6zmYMD96R7RqPuMn.jpg", "genre_ids": [28, 80, 53], "id": 1105407, "original_language": "en", "original_title": "Damaged", "overview": "A Chicago detective travels to Scotland after an emerging serial killer’s crimes match those that he investigated five years earlier, one of which was the crime scene of his murdered girlfriend.", "popularity": 1263.252, "poster_path": "https://image.tmdb.org/t/p/original/tMO0YLXgJZBnIAjoTSz26zE33YN.jpg", "release_date": "2024-04-12", "title": "Damaged", "video": false, "vote_average": 4.844, "vote_count": 45 }, { "adult": false, "backdrop_path": "https://image.tmdb.org/t/p/original/keVfqCMKmJ55nHzmqR2Q5K7LwJt.jpg", "genre_ids": [28, 53, 10752], "id": 784651, "original_language": "hi", "original_title": "फाइटर", "overview": "Top IAF aviators come together in the face of imminent danger, to form Air Dragons. Fighter unfolds their camaraderie, brotherhood and battles, internal and external.", "popularity": 1068.097, "poster_path": "https://image.tmdb.org/t/p/original/zDZowwb9GZGEctAu2PCpjiPQAMM.jpg", "release_date": "2024-01-24", "title": "Fighter", "video": false, "vote_average": 5.125, "vote_count": 44 }, { "adult": false, "backdrop_path": "https://image.tmdb.org/t/p/original/7ZP8HtgOIDaBs12krXgUIygqEsy.jpg", "genre_ids": [878, 28, 14, 12], "id": 601796, "original_language": "ko", "original_title": "외계+인 1부", "overview": "Gurus in the late Goryeo dynasty try to obtain a fabled, holy sword, and humans in 2022 hunt down an alien prisoner that is locked in a human's body. The two parties cross paths when a time-traveling portal opens up.", "popularity": 1062.898, "poster_path": "https://image.tmdb.org/t/p/original/8QVDXDiOGHRcAD4oM6MXjE0osSj.jpg", "release_date": "2022-07-20", "title": "Alienoid", "video": false, "vote_average": 6.767, "vote_count": 292 }, { "adult": false, "backdrop_path": "https://image.tmdb.org/t/p/original/2KGxQFV9Wp1MshPBf8BuqWUgVAz.jpg", "genre_ids": [16, 28, 12, 35, 10751], "id": 940551, "original_language": "en", "original_title": "Migration", "overview": "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.", "popularity": 929.948, "poster_path": "https://image.tmdb.org/t/p/original/ldfCF9RhR40mppkzmftxapaHeTo.jpg", "release_date": "2023-12-06", "title": "Migration", "video": false, "vote_average": 7.52, "vote_count": 1249 }, { "adult": false, "backdrop_path": "https://image.tmdb.org/t/p/original/pwGmXVKUgKN13psUjlhC9zBcq1o.jpg", "genre_ids": [28, 14], "id": 634492, "original_language": "en", "original_title": "Madame Web", "overview": "Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.", "popularity": 947.606, "poster_path": "https://image.tmdb.org/t/p/original/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg", "release_date": "2024-02-14", "title": "Madame Web", "video": false, "vote_average": 5.609, "vote_count": 1155 }, { "adult": false, "backdrop_path": "https://image.tmdb.org/t/p/original/oe7mWkvYhK4PLRNAVSvonzyUXNy.jpg", "genre_ids": [28, 53], "id": 359410, "original_language": "en", "original_title": "Road House", "overview": "Ex-UFC fighter Dalton takes a job as a bouncer at a Florida Keys roadhouse, only to discover that this paradise is not all it seems.", "popularity": 906.716, "poster_path": "https://image.tmdb.org/t/p/original/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg", "release_date": "2024-03-08", "title": "Road House", "video": false, "vote_average": 7.025, "vote_count": 1606 }, { "adult": false, "backdrop_path": "https://image.tmdb.org/t/p/original/rVJfabCz1ViynQCEz54MRqdZig1.jpg", "genre_ids": [16, 878, 28], "id": 1155089, "original_language": "en", "original_title": "Justice League: Crisis on Infinite Earths Part One", "overview": "Death is coming. Worse than death: oblivion. Not just for our Earth, but for everyone, everywhere, in every universe! Against this ultimate destruction, the mysterious Monitor has gathered the greatest team of Super Heroes ever assembled. But what can the combined might of Superman, Wonder Woman, Batman, The Flash, Green Lantern and hundreds of Super Heroes from multiple Earths even do to save all of reality from an unstoppable antimatter armageddon?!", "popularity": 770.545, "poster_path": "https://image.tmdb.org/t/p/original/zR6C66EDklgTPLHRSmmMt5878MR.jpg", "release_date": "2024-01-08", "title": "Justice League: Crisis on Infinite Earths Part One", "video": false, "vote_average": 7.635, "vote_count": 189 }, { "adult": false, "backdrop_path": "https://image.tmdb.org/t/p/original/qekky2LbtT1wtbD5MDgQvjfZQ24.jpg", "genre_ids": [28, 53], "id": 984324, "original_language": "fr", "original_title": "Le salaire de la peur", "overview": "When an explosion at an oil well threatens hundreds of lives, a crack team is called upon to make a deadly desert crossing with nitroglycerine in tow.", "popularity": 811.937, "poster_path": "https://image.tmdb.org/t/p/original/jFK2ZLQUzo9pea0jfMCHDfvWsx7.jpg", "release_date": "2024-03-28", "title": "The Wages of Fear", "video": false, "vote_average": 5.759, "vote_count": 199 }, { "adult": false, "backdrop_path": "https://image.tmdb.org/t/p/original/uv2twFGMk2qBdyJBJAVcrpRtSa9.jpg", "genre_ids": [10752, 28, 18], "id": 929590, "original_language": "en", "original_title": "Civil War", "overview": "In the near future, a group of war journalists attempt to survive while reporting the truth as the United States stands on the brink of civil war.", "popularity": 723.121, "poster_path": "https://image.tmdb.org/t/p/original/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg", "release_date": "2024-04-10", "title": "Civil War", "video": false, "vote_average": 7.397, "vote_count": 469 }, { "adult": false, "backdrop_path": "https://image.tmdb.org/t/p/original/dcnSWFCtk4b2aIzkhq6IDbzoIf1.jpg", "genre_ids": [28, 35], "id": 942047, "original_language": "en", "original_title": "Outsource", "overview": "A police chief hires an old friend, who is an international spy, to help him search for a wanted suspect in the Philippines. When the chief dies, all evidence points towards the spy, and he must go to extremes to defend himself.", "popularity": 747.695, "poster_path": "https://image.tmdb.org/t/p/original/zIAF0UXtCJTJOYNYWiBfyifaaOi.jpg", "release_date": "2022-01-18", "title": "Outsource", "video": false, "vote_average": 2.273, "vote_count": 11 }, { "adult": false, "backdrop_path": "https://image.tmdb.org/t/p/original/tBmJCH9llj1Q9jDOS7vGWnl7GVj.jpg", "genre_ids": [16, 878, 28], "id": 1209288, "original_language": "en", "original_title": "Justice League: Crisis on Infinite Earths Part Two", "overview": "An endless army of shadow demons bent on the destruction of all reality swarms over our world and all parallel Earths! The only thing opposing them is the mightiest team of metahumans ever assembled. But not even the combined power of Superman, Batman, Wonder Woman, Green Lantern and all their fellow superheroes can slow down the onslaught of this invincible horde. What mysterious force is driving them? And how do the long-buried secrets of the Monitor and Supergirl threaten to crush our last defense?", "popularity": 790.506, "poster_path": "https://image.tmdb.org/t/p/original/g8ak4QAGLZpqMs3CpnFHWWfIzJQ.jpg", "release_date": "2024-04-22", "title": "Justice League: Crisis on Infinite Earths Part Two", "video": false, "vote_average": 6.091, "vote_count": 33 }, { "adult": false, "backdrop_path": "https://image.tmdb.org/t/p/original/jnE1GA7cGEfv5DJBoU2t4bZHaP4.jpg", "genre_ids": [28, 878], "id": 1094844, "original_language": "en", "original_title": "Ape vs. Mecha Ape", "overview": "Recognizing the destructive power of its captive giant Ape, the military makes its own battle-ready A.I., Mecha Ape. But its first practical test goes horribly wrong, leaving the military no choice but to release the imprisoned giant ape to stop the colossal robot before it destroys downtown Chicago.", "popularity": 786.115, "poster_path": "https://image.tmdb.org/t/p/original/dJaIw8OgACelojyV6YuVsOhtTLO.jpg", "release_date": "2023-03-24", "title": "Ape vs. Mecha Ape", "video": false, "vote_average": 5.088, "vote_count": 17 }, { "adult": false, "backdrop_path": "https://image.tmdb.org/t/p/original/fypydCipcWDKDTTCoPucBsdGYXW.jpg", "genre_ids": [878, 12, 28], "id": 653346, "original_language": "en", "original_title": "Kingdom of the Planet of the Apes", "overview": "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.", "popularity": 642.06, "poster_path": "https://image.tmdb.org/t/p/original/gKkl37BQuKTanygYQG1pyYgLVgf.jpg", "release_date": "2024-05-08", "title": "Kingdom of the Planet of the Apes", "video": false, "vote_average": 0, "vote_count": 0 }, { "adult": false, "backdrop_path": "https://image.tmdb.org/t/p/original/3RWsSQlqzRjsuqSRmoyggy74UA7.jpg", "genre_ids": [28, 14, 35], "id": 43074, "original_language": "en", "original_title": "Ghostbusters", "overview": "Following a ghost invasion of Manhattan, paranormal enthusiasts Erin Gilbert and Abby Yates, nuclear engineer Jillian Holtzmann, and subway worker Patty Tolan band together to stop the otherworldly threat.", "popularity": 511.283, "poster_path": "https://image.tmdb.org/t/p/original/wJmWliwXIgZOCCVOcGRBhce7xPS.jpg", "release_date": "2016-07-14", "title": "Ghostbusters", "video": false, "vote_average": 5.4, "vote_count": 6183 }], "total_pages": 1981, "total_results": 39618 }
  );

  let requiredGenres = [];
  genreIds.forEach((genre) => {
    return genreNames.filter((data) => {
      if (data.name === genre.name) {
        requiredGenres.push(genre);
      }
    });
  });
  useEffect(() => {
    if (requiredGenres.length > 0) {
      requiredGenres.map((genre) => {
        const url = `https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=${genre.id}&page=1`;
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '600107688dmsha3cb156f97f6f2fp1e6bfejsnbe88e42cb4d7',
            'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
          }
        };
        fetch(url, options)
          .then(async (response) => {
            const res = await response.text();
            // setFetchedMovies((prev) => {
            //   return [...prev, res];
            // });
          });
      });
    } else {
      null;
    }
  }, []);

  return (
    <p>
      Browse
      {requiredGenres.map((genre) => {
        return (
          <>
            <div key={genre.id}>{genre.name}</div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
              }}
            >
              {fetchedMovies.results.map((movie) => {
                return (
                  <div
                    key={movie.original_title}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                    }}
                  >
                    {movie.original_title}
                    <img
                      width={200}
                      height={200}
                      src={movie.poster_path}
                      alt={movie.original_title}
                    />
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </p>
  );
}