import React, { useState, useEffect } from 'react';
import MoviesTable from './tables/MoviesTable';
import AddMovieForm from './forms/AddMovieForm';
import sortBy from 'sort-by';

const App = () => {

  useEffect(() => {
    fetch('https://swapi.co/api/films')
      .then(function(response) {
        return response.json();
      })
      .then(function(responseJson) {
        const data = responseJson.results.map(movie => {
          return {
            episode_id: movie.episode_id, 
            title: movie.title, 
            release_date: movie.release_date,
            director: movie.director
          };
        }).sort(sortBy(movies.column));
        setMovies({data: data, column: movies.column, order: 'desc'});
      });
    }, []);
    
    const [ movies, setMovies ] = useState({data: [], order: 'asc', column: 'episode_id'});

    const addMovie = movie => {
      movie.episode_id = movies.data.length + 1;
      orderList([ ...movies.data, movie ]);
    }

    const deleteMovie = id => {
      setMovies({data: movies.data.filter(movie => movie.episode_id !== id), column: movies.column, order: movies.order})
    }

    const orderList = (m) => {
      setMovies({data: m.sort(sortBy(movies.column)), column: movies.column, order: 'desc'});
    }

    return (
        <div className="container">
          <h1>Movies</h1>
          <div className="section">
              <h2>Add movie</h2>
              <AddMovieForm addMovie={addMovie} />
          </div>
          <div className="section">
            <MoviesTable movies={movies.data} deleteMovie={deleteMovie} />
          </div>
        </div>
    )
}

export default App;
