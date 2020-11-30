import React, { useContext } from 'react';
import { IonPage, IonContent } from "@ionic/react";
import { RouteComponentProps, withRouter  } from "react-router";
import {AppContext} from '../../App';
import Header from '../../components/Header/Header';

const Home: React.FC<RouteComponentProps> = ({ history }) => {

    const context = useContext(AppContext);
    console.log(context);

    // if (!context.loggedIn){
    //     history.push('/');
    // }

    return (
        <IonPage>
            <Header/>
            <IonContent>
                
            </IonContent>
        </IonPage>
    )
}

export default withRouter(Home)