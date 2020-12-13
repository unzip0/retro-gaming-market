import React from 'react'
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Product from '../pages/Product/Product';
import { Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet } from '@ionic/react';


export const AppRouter: React.FC = () => {
    return (
        <IonReactRouter>
            <IonRouterOutlet>
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/product" component={Product} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/" component={Login} />
            </IonRouterOutlet>
      </IonReactRouter>
    )
}
