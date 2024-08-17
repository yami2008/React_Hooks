import React from 'react';
import { useParams, Link } from 'react-router-dom';
import movies from './movies.jsx';

const MovieDetail = () => {
    const { title } = useParams();
    const movie = movies.find(m => m.title === title);

    if (!movie) {
        return <div>Movie not found!</div>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <iframe
                width="560"
                height="315"
                src={movie.trailerLink}
                title={movie.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            <br />
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default MovieDetail;
