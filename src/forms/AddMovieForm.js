import React, { useState } from 'react';

const AddMovieForm = props => {

    const initialFormState = {
        episode_id: null, 
        title: '', 
        release_date: '', 
        director: '' 
    };
    const [ movie, setMovie ] = useState(initialFormState);

    const handleInputChange = event => {

        const { name, value } = event.target;
        setMovie({ ...movie, [name]: value });
    }

    const handleSubmitForm= event => {
        event.preventDefault();
        if (!movie.title || !movie.release_date || !movie.director) return;

        props.addMovie(movie);
        setMovie(initialFormState);
    };
    return (
        <form onSubmit={handleSubmitForm}>
            <div className="field">
                <label>Title</label>
                <input type="text" name="title" value={movie.title} onChange={handleInputChange} />
            </div><div className="field">    
                <label>Release Date</label>
                <input type="date" name="release_date" value={movie.release_date} onChange={handleInputChange} />
            </div><div className="field">
                <label>Director</label>
                <input type="text" name="director" value={movie.director} onChange={handleInputChange} />
            </div>
            <button className="submit">Add Movie</button>
        </form>
    )
}

export default AddMovieForm;
