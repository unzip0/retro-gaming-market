import React from 'react';
import { IonHeader, IonToolbar, IonIcon, IonButtons, IonMenuButton, IonImg } from "@ionic/react";

const Header: React.FC = () => {

    return (
        <IonHeader>
            <IonToolbar color="dark">
                <IonButtons slot="start">
                    <IonMenuButton autoHide={false} >
                        <IonIcon src="assets/icon/menu-icon.svg" />
                    </IonMenuButton>
                </IonButtons>
                <IonImg class="ion-float-start" src="assets/images/logo.png"/>
            </IonToolbar>
        </IonHeader>
        
    )
}

export default Header