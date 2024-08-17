import React from 'react';
import movies from './movies.jsx';
import MovieCard from './MovieCard';

const MovieList = () => {
    return (
        <div className="movie-list">
            {movies.map(movie => (
                <MovieCard key={movie.title} {...movie} />
            ))}
        </div>
    );
};

export default MovieList;
