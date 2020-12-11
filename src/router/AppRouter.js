import React from 'react'
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import Product from '../pages/Product/Product';
import { Route } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet } from '@ionic/react';


export const AppRouter = () => {
    return (
        <IonReactRouter>
        <IonRouterOutlet>
            <Route path="/profile" component={Profile} exact />
            <Route path="/product" component={Product} exact />
            <Route path="/home" component={Home} exact />
            <Route path="/" component={Login} exact />
        </IonRouterOutlet>
      </IonReactRouter>
    )
}
