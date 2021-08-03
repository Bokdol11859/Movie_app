import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ year, title, poster, summary, genre }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}></img>
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <ul className="movie_genre">
          {genre.map((genre, index) => (
            <li key={index} className="genre_genre">
              {genre}
            </li>
          ))}
        </ul>
        <h5 className="movie_year">{year}</h5>
        <p className="movie_sum">{summary.slice(0, 140)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genre: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
