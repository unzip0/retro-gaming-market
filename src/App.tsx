import React, { useState } from 'react';
import { IonApp } from '@ionic/react';
import Menu from './components/Menu/Menu';
import { AppRouter } from './router/AppRouter';
import { UserContext, User } from './UserContext';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  
  const [ user, setUser ] = useState<User>();

  return (
  <>
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <IonApp>
          <AppRouter />
      </IonApp>
      <Menu />
    </UserContext.Provider>
  </>
)};

export default App;
