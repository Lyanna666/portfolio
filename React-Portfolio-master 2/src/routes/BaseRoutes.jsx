import { lazy, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
//modals
import ModalProjectCard from '../scenes/Projects/ModalProjectCard/ModalProjectCard';
//scenes
const Home = lazy(() => import('../scenes/Home/Home'));
const About = lazy(() => import('../scenes/About/About'));
const Projects = lazy(() => import('../scenes/Projects/Projects'));
const Resume = lazy(() => import('../scenes/Resume/Resume'));

export const routes = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  PROJECT: '/project/:id',
  RESUME: '/resume',
};

const BaseRoutes = () => {

  const { pathname, hash, key } = useLocation(); // Aquí guardamos la sección a la que nos queremos mover

  useEffect(
    () => {
      // Si no hay nada hacemos scroll al inicio de la pag
      if (hash === '') {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
      }
      // si no scroll hasta el id
      else {
        setTimeout(() => {
          const id = hash.replace('#', '');
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({behavior: 'smooth'});
          }
        }, 0);
      }
    },
    [pathname, hash, key],
  );

  const location = useLocation();
  const background = location.state?.background;

  return (
    <>
      <Switch location={background || location}>
        <Route exact path={routes.HOME} component={Home} />
        <Route path={routes.ABOUT} component={About} />
        <Route path={routes.PROJECTS} component={Projects} />
        <Route path={routes.PROJECT} component={ModalProjectCard} />
        <Route path={routes.RESUME} component={Resume} />
      </Switch>

      {background && (
        <Route path={routes.PROJECT} component={ModalProjectCard} />
      )}
    </>
  );
};

export default BaseRoutes;
