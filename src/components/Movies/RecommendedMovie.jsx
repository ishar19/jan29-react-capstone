import React from "react";

function RecommendedMovie({movie}) {
    return (
        <div
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
}

export default RecommendedMovie;