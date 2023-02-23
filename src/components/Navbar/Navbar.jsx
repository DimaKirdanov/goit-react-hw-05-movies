import { NavLink } from 'react-router-dom';

import options from './options';
import s from './Navbar.module.css';

export const Navbar = () => {
  const elements = options.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={s.option} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={s.menu}>{elements}</ul>;
};
