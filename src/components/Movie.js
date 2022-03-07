import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import './Movie.css';

Movie.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Movie({id, title, rating, year, summary, poster, genres}){

    return (
        <div className="movie">
            <Link to={'/movie-detail'} state={{year, title, summary, poster, genres}} >
                <img src={poster} alt={title} title={title} />
                <div className="movie_data">
                    <h3 className="movie_title">{title} ({rating})</h3>
                    <h5 className="movie_year">{year}</h5>
                    <ul className="movie_genres">
                        {genres.map((genre, index) => {
                            return <li key={index} className="movie_genre">{genre}</li>;
                        })}
                    </ul>
                    <p className="movie_summary">{summary.slice(0, 200)}{summary.length > 200 ? "..." : ""}</p>
                </div>
            </Link> 
        </div>
    );
}

export default Movie;