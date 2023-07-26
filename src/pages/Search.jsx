import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

//? Components.
import MovieCard from '../components/MovieCard';

//? Css.
import './MovieGrid.css';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q');

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;

    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div>
      <div className="container">
        <h2 className="title">
          Results for 🎥: <span className="query-text">{query}</span>{' '}
        </h2>
        <div className="movies-container">
          {movies.length === 0 && <p>Loading...</p>}
          {movies.length > 0 &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </div>
  );
};

export default Search;
