import React from "react";
import RecommendedMovie from './RecommendedMovie'

function RecommendedMovies({category, movies}) {
    return (
        <div>
            <div key={category.id}>{category.name}</div>
            <div 
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "20px",
                  }}
            >
                {movies.results.map(movie => 
                        <RecommendedMovie key={movie.original_title} movie={movie}/>)
                }
            </div>
        </div>
    )
}

export default RecommendedMovies;