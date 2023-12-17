import React, { useState, useEffect } from "react";

import MovieContainer from "./MovieContainer";
import SearchIcon from "./Search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("batman");
  const [movies, setMovies] = useState([]);

  
  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);

  };

  
  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
         
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieContainer movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
    
  );
};

export default App;
