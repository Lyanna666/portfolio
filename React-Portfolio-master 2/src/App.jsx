import './styles/main.scss';
import { Suspense, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRoutes from './routes/BaseRoutes';
import Preloader from './components/UIElements/Preloader/Preloader';

import AppContext from './AppContext';

import * as constantsSpanish from './constants/spanish';
import * as constantsEnglish from './constants/english';


const App = () => {
  // Creamos un estado para guardar el idioma selecionado por el usuario
  const [language, setLanguage] = useState(constantsSpanish);

  // En userSetting guardo los ajustes del usuario (ahora mismo el idioma que ha selecionado pero posteriormente se podrían guardar más cosas)
  // Se podrá acceder a estos valores desde cualquier componente
  const userSettings = { language: language, changeLanguage: changeLanguage };

  function changeLanguage(event) {
    //Esta función se encarga de cambiar el idioma en función del botón que se pulse
    if (event.target.id === 'EN') {
      setLanguage(constantsEnglish);
    } else {
      setLanguage(constantsSpanish);
    }
  }
  return (
    <AppContext.Provider value={userSettings}>
    <Suspense fallback={<Preloader />}>
      <Router>
        <BaseRoutes />
      </Router>
      </Suspense>
    </AppContext.Provider>
  );
};

export default App;
