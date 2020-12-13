import React, { useContext } from 'react';
import { IonPage, IonContent } from "@ionic/react";
import { RouteComponentProps } from "react-router";
import Header from '../../components/Header/Header';
import { UserContext } from '../../UserContext';

const Home: React.FC<RouteComponentProps> = ({ history }) => {

    const userContext = useContext(UserContext);
    console.log(userContext);
    return (
        <IonPage>
            <Header/>
            <IonContent>
                
            </IonContent>
        </IonPage>
    )
}

export default Home;