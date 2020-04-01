import React from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonMenuButton, IonButtons, IonIcon } from "@ionic/react";
import { RouteComponentProps, withRouter  } from "react-router";
import Menu from './Menu';
import './Home.css';


const Home: React.FC<RouteComponentProps> = () => {
    return (
        <IonPage>
            <Menu />
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
            
            <IonContent>
            </IonContent>
        </IonPage>
    )
}

export default withRouter(Home)