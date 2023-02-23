import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCast } from 'components/shared/services/moviesAPI';
import s from './castPage.module.css';
const CastPage = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getCast(id);
        setCast(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCast();
  }, [id]);

  const items = cast.map(({ id, name, character, profile_path }) => (
    <li className={s.item} key={id}>
      {profile_path && (
        <img
          className={s.img}
          src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
          alt=""
        ></img>
      )}
      <p className={s.name}>{name}</p>
      <p className={s.desc}>{character}</p>
    </li>
  ));

  return (
    <ul className={s.list}>
      {items.length === 0
        ? "We don't have any information about actors"
        : items}
    </ul>
  );
};

export default CastPage;
