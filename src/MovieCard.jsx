import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, posterURL, rating }) => {
    return (
        <div className="movie-card">
            <Link to={`/movie/${title}`}>
                <img src={posterURL} alt={title} />
                <h3>{title}</h3>
                <p>Rating: {rating}</p>
            </Link>
        </div>
    );
};

export default MovieCard;
