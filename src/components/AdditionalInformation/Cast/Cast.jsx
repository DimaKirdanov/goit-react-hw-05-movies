import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import api from 'services/api';
import s from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    try {
      const response = api.fetchCast(movieId);
      response.then(data => {
        data.data.cast.map(({ name, character, profile_path }) =>
          setCast(c => [...c, { name, character, profile_path }])
        );
      });
    } catch (error) {}
  }, [movieId]);

  const items = cast.map(({ id, name, character, profile_path }) => (
  
  <li className={s.item} key={id}>
      {profile_path && (
        <img className={s.img}
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt=""
          width="200"
        ></img>
      )}
      <p className={s.name}>{name}</p>
      <p className={s.desc}>{character}</p>
    </li>
   
  
  ));

  return (
    <ul className={s.list}>
      {items.length === 0
        ? "We don't have any information about actors."
        : items}
    </ul>
  );
};
