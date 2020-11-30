import React from 'react';
import { IonPage, IonText } from "@ionic/react";
import { RouteComponentProps, withRouter  } from "react-router";
import Header from '../../components/Header/Header';

const Profile: React.FC<RouteComponentProps> = () => {
    return (
        <IonPage>
            <Header/>
            <IonText>Moterfucker</IonText>
        </IonPage>
    )
}

export default withRouter(Profile)