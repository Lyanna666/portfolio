import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Soy {' '}
        <span className={s.purple}>S </span>
        from <span className={s.purple}> T.</span>
        <br />
        Lorem ipsum dolor sit amet, c tincidunt convallis. Nam nisl velit, ullamcorper in risus
        <br /> monsectetur adipiscing elit. Nulla sollicitudin
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sollicitudin tincidunt convallis.
        <br />
        <br />
        
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> 1c c xc dfbfb
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> 2  dfb fdb df
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> 3 fd     fgb   d
        </li>
      </ul>

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "Nulla sollicitudin tincidunt convallis."{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;
