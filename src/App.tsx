import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';

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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
          <Route path="/profile" component={Profile} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/" component={Login} exact />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
