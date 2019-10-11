import React from 'react';

const MoviesTable = props => {
  
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Release Date</th>
          <th>Director</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.movies.length > 0 ? (
          props.movies.map(movie => (
            <tr key={movie.episode_id}>
              <td>{movie.title}</td>
              <td>{movie.release_date}</td>
              <td>{movie.director}</td>
              <td>
              <button
                onClick={() => props.deleteMovie(movie.episode_id)}
                className="delete"
              >Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={4}>No movies</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default MoviesTable;