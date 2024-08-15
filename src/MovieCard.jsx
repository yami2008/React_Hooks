import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, description, posterURL, rating }) => {
    return (
        <div className="movie-card">
            <img src={posterURL} alt={title} className="movie-poster" />
            <div className="movie-info">
                <h2>{title}</h2>
                <p>{description}</p>
                <p><strong>Rating:</strong> {rating}</p>
            </div>
        </div>
    );
};

export default MovieCard;
