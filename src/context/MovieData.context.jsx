import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const MovieDataContext = createContext({
  movieData: {},
});

export const MovieDataProvider = ({ children }) => {
  const [movieData, setMovieData] = useState({});
  const [movie, setMovie] = useState("");

  const options = {
    method: "GET",
    url: "https://movies-and-serials-torrent.p.rapidapi.com/movies/search/iron%20man",
    headers: {
      "X-RapidAPI-Key": "7bf10f8842msh4ab187d4b536838p1b3562jsn154c12ad479b",
      "X-RapidAPI-Host": "movies-and-serials-torrent.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const getMovieData = () => {
      axios
        .request(options)
        .then(function (response) {
          const moviesData = response.data.data;
          console.log(moviesData.movies);
          setMovieData(moviesData.movies);
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    getMovieData();
  }, []);

  const value = { movieData };

  return (
    <MovieDataContext.Provider value={value}>
      {children}
    </MovieDataContext.Provider>
  );
};
