import React from 'react';
import { IonContent, IonMenu, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonRouterOutlet, IonIcon, IonText } from "@ionic/react";

const Menu: React.FC = () => {

    return (
        <IonMenu side="start" menuId="menu" type="push" contentId="menu">
            <IonHeader>
                <IonToolbar color="danger">
                <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent color="dark">
                <IonList class="ion-no-padding">
                    <IonItem routerLink="/home" color="dark">
                        <IonIcon src="assets/icon/home-icon.svg"/> 
                        <IonText>Inicio</IonText>
                    </IonItem>
                    <IonItem routerLink="/profile" color="dark">
                        <IonIcon src="assets/icon/user-icon.svg"/> 
                        <IonText>Perfil</IonText>
                    </IonItem>
                    <IonItem routerLink="/product" color="dark">
                        <IonIcon src="assets/icon/add-game-icon.svg"/> 
                        <IonText>Vender producto</IonText>
                    </IonItem>
                    <IonItem color="dark">
                        <IonIcon src="assets/icon/list-icon.svg"/> 
                        <IonText>Tus productos</IonText>
                    </IonItem>
                    <IonItem routerLink="/" color="dark">
                        <IonIcon src="assets/icon/logout-icon.svg"/> 
                        <IonText>Cerrar sesión</IonText>
                    </IonItem>
                </IonList>
            </IonContent>
            <IonRouterOutlet id="menu"></IonRouterOutlet>
        </IonMenu>
        
    )
}

export default  Menu