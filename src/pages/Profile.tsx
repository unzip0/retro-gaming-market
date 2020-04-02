import React from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonMenuButton, IonButtons, IonIcon, IonText } from "@ionic/react";
import { RouteComponentProps, withRouter  } from "react-router";
import Menu from './Menu';
import './Home.css';


const Profile: React.FC<RouteComponentProps> = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton autoHide={false} >
                            <IonIcon src="assets/icon/menu-icon.svg" />
                        </IonMenuButton>
                    </IonButtons>
                    <IonTitle>RGM</IonTitle>
                </IonToolbar>
            </IonHeader>
                <IonText>Moterfucker</IonText>
        </IonPage>
    )
}

export default withRouter(Profile)