import React from "react";
import { directors } from "../data";

function Directors() {
  const directorsList = directors.map( dir => {

    const movieList = dir.movies.map( movie => {
      return <li key={movie}>{movie}</li>
    })

    return <div key={dir.name}>
      <div>{dir.name}</div>
      <ul>
        {movieList}
      </ul>
    </div>
  })
  return (
    <div>
      <h1>Directors Page</h1>
      <ul>{directorsList}</ul>
    </div>
  );
}

export default Directors;
