import React from "react";
import { movies } from "../data";

function Movies() {

  const movieList = movies.map(movie => {
    const movieGenres = movie.genres.map(genre => {
      return <li key={genre}>{genre}</li>
    })

    return <div key={movie.title}>
      <h3>Name: {movie.title}</h3>
      <div>
        Time: {movie.time}
      </div>
      <div>Genres:</div>
      <ul>
        {movieGenres}
      </ul>
    </div>
  })
  return <div>
    <h1>Movies Page</h1>
    {movieList}
  </div>;
}

export default Movies;
