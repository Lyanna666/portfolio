import s from './MainSection.module.scss';
import{useContext} from 'react';
import AppContext from '../../../AppContext'
import homeMainIcon from '../../../assets/avatar.png';
import Typewriter from '../../../components/UIElements/Typewriter/Typewriter';
import { LazyLoadImage } from 'react-lazy-load-image-component';



const MainSection = () => {

const context = useContext(AppContext);

  return (
    <section className={s.content}>
      <div className={s.header}>
        <h2 style={{ paddingBottom: 15 }} className={s.title}>
          {context.language.HI} <span className={s.wave}>👋🏻</span>
        </h2>

        <h1 className={s.mainTitle}>
          {context.language.IAM}
          <strong className={s.mainName}> {context.language.NAME}</strong>
        </h1>

        <div style={{ paddingTop: 50 }}>
          <Typewriter
            strings={context.language.INTROS}
            wrapperClassName={s.typewriterWrapper}
            cursorClassName={s.typewriterCursor}
          />
        </div>
      </div>

      <LazyLoadImage
        alt="home-img"
        effect="blur"
        src={homeMainIcon}
        wrapperClassName={s.homeMainIcon}
      />
    </section>
  );
};

export default MainSection;
