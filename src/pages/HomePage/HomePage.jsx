import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { getTrending } from 'components/shared/services/moviesAPI';
import s from './homePage.module.css';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  useEffect(() => {
    getTrending().then(setMovies);
  }, []);

  const location = useLocation();

  const elements = movies.map(movie => (
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
            width="50"
            alt=""
            title={movie.title}
          />
          {movie.title}
        </div>
      </Link>
    </li>
  ));

  return (
    <>
      <ul className={s.list}>{elements}</ul>
    </>
  );
};

export default HomePage;
