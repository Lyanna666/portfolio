import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.png';
import { AiFillGithub } from 'react-icons/ai';
import { MdWork } from 'react-icons/md';
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';

import AboutTextCard from '../../About/AboutTextCard/AboutTextCard';
import TechSkills from '../../About/TechSkills/TechSkills';

const IntroSection = () => {
  return (
    <section className={s.content}>
       <h2 id="experiencia" className={s.skills}>
          Experiencia <b className={s.purple}>profesional</b> y <b className={s.purple}>académica</b>
        </h2>
      <div style={{ textAlign: 'justify' }} className={s.introduction}>
      
        <div className={s.introductionText}>
           <div className={s.description}>

          <h3 className={s.title}><MdWork/> Experiencia laboral</h3>
          <hr />
                  <ul className={s.experience}>
            <li>
              <h4 className={s.subtitle}>Desarrolladora iOS</h4>
                <h5 className={s.sub}>INDRA Salamanca | 05/2018 - 03/2021</h5>
              <p>
                Mantenimiento y testing de distintas aplicaciones iOS en Swift y
                Objective-C para iPhone y para iPad.
              </p>
            </li>
            <li>
              <h4 className={s.subtitle}>Desarrolladora iOS - Testing</h4>
              <h5 className={s.sub}>Talento Mobile Salamanca | 03/2017 - 05/2018</h5>
              <p>
                Desarrollo de distintas aplicaciones en Swift y Objective C
                principalmente para el sector bancario (Santander, Zurich
                Seguros, ING).
              </p>
              <p>Testing para la aplicación móvil y la página web de ING.</p>
            </li>
            <li>
              <h4 className={s.subtitle}>Prácticas fotógrafa / Diseño gráfico</h4>
              <h5 className={s.sub}>
                Periódico Tribuna Universitaria Salamanca | 09/2014 - 01/2015
              </h5>
              <p>
                Fotografía, edición fotográfica, maquetación y diseño gráfico.
                (Adobe Photoshop - Adobe InDesign - Lightroom)
              </p>
            </li>
          </ul></div>
        </div>
                <div className={s.introductionText}>
          

          <div className={s.description}>
          
          <h3  className={s.title}>  <MdWork/> Formación académica</h3>
          <hr />
            <ul className={s.experience}>
            <li>
                <h4 className={s.subtitle}>Bootcamp Desarrollo Web</h4>
              <h5 className={s.sub}>General Assembly | 2022 - Actual</h5>
              <p>Bootcamp sobre desarrollo web centrado en HTML, JavaScript, CSS, Angular, React y Vue</p>
            </li>
            <li>
              <h4 className={s.subtitle}>FPII Desarrollo de aplicaciones multiplataforma</h4>
              <h5 className={s.sub}>Salesianos San José Salamanca | 2017</h5>
            </li>
            <li>
              <h4 className={s.subtitle}>FPI Laboratorio de imagen</h4>
              <h5 className={s.sub}>IES Rodríguez Fabrés Salamanca | 2014</h5>
            </li>
          </ul>
          </div>
        </div>
      </div>
      <h2 className={s.skills}>
          Professional <b className={s.purple}>Skills</b>
        </h2>
      <TechSkills></TechSkills>
      <div className={s.introSocial}>
        <h1></h1>
        <p>
          Contacta <span className={s.purple}>conmigo </span>a través de
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="h"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="h"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="h"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaTelegramPlane />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="h/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
