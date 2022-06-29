import s from './NavLinks.module.scss';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { routes } from '../../../routes/BaseRoutes';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className={s.navBar}>
      <li>
        <NavLink to={routes.HOME} >
          <AiOutlineHome />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to='/#experiencia' >
          <AiOutlineUser />
          Experiencia
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.PROJECTS} >
          <AiOutlineFundProjectionScreen />
          Proyectos
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.RESUME} >
          <CgFileDocument />
          Curriculum
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
