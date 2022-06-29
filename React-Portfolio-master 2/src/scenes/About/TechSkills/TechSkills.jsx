import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiGit,
  DiCss3,
  DiSass,
  GrMysql,
  DiMysql
} from 'react-icons/di';
import {
  SiRedux,
  SiSocketDotIo,
  SiAmazonaws,
  SiFirebase
} from 'react-icons/si';
import {
  FaSwift,
  FaJava,
  FaAppStoreIos
} from 'react-icons/fa';

const TechSkills = () => {
  return (
    <ul className={s.container}>
    
      <li className={s.techIcon}>
        <DiHtml5 />
      </li>
      <li className={s.techIcon}>
        <DiCss3 />
      </li>
      <li className={s.techIcon}>
        <DiSass />
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
     
      
     
      <li className={s.techIcon}>
        <FaAppStoreIos />
      </li>
       <li className={s.techIcon}>
        <FaSwift />
      </li>
      <li className={s.techIcon}>
        <FaJava />
      </li>
      <li className={s.techIcon}>
        <DiMysql />
      </li><li className={s.techIcon}><SiFirebase/></li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
    </ul>
  );
};

export default TechSkills;
