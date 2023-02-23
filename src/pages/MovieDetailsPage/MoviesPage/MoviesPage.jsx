import { Link } from 'react-router-dom';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { fetchMovieByQuery } from 'components/shared/services/moviesAPI';
import s from './moviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  useEffect(() => {
    if (keyword === '' || keyword === null) {
      return;
    }

    fetchMovieByQuery(keyword).then(setMovies);
  }, [keyword]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ keyword: form.elements.keyword.value });
    form.reset();
  };

  const location = useLocation();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="keyword" />
        <button type="submit">Search</button>
      </form>
      <ul className={s.list}>
        {movies.map(movie => (
          <li className={s.item} key={movie.id}>
            <Link
              className={s.link}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              <div className={s.container}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  className={s.img}
                  alt="can't find poster"
                  title={movie.title}
                />
                {movie.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesPage;
