import React, { useState } from 'react';
import MovieList from './MovieList.jsx';
import Filter from './Filter.jsx';
import './App.css';

const App = () => {
    const [movies, setMovies] = useState([
        {
            title: 'Inception',
            description: 'A mind-bending thriller.',
            posterURL: 'https://via.placeholder.com/150?text=Inception',
            rating: 9
        },
        {
            title: 'Interstellar',
            description: 'A journey through space and time.',
            posterURL: 'https://via.placeholder.com/150?text=Interstellar',
            rating: 8.6
        }
    ]);

    const [filteredMovies, setFilteredMovies] = useState(movies);

    const addMovie = (movie) => {
        setMovies([...movies, movie]);
        setFilteredMovies([...movies, movie]);
    };

    const handleFilter = ({ title, rating }) => {
        const filtered = movies.filter(movie => {
            return (
                (title ? movie.title.toLowerCase().includes(title.toLowerCase()) : true) &&
                (rating ? movie.rating >= rating : true)
            );
        });
        setFilteredMovies(filtered);
    };

    return (
        <div className="App">
            <h1>Movie App</h1>
            <Filter onFilter={handleFilter} />
            <MovieList movies={filteredMovies} />
            {/* Add functionality to add new movies */}
            <button onClick={() => addMovie({
                title: 'New Movie',
                description: 'Description of new movie.',
                posterURL: 'https://via.placeholder.com/150?text=New+Movie',
                rating: 7
            })}>Add New Movie</button>
        </div>
    );
};

export default App;
