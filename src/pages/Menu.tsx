import React from 'react';
import { IonContent, IonMenu, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonRouterOutlet, IonIcon, IonText } from "@ionic/react";
import './Menu.css';

const Menu: React.FC = () => {

    return (
        <IonMenu side="start" menuId="menu" type="push" contentId="menu">
            <IonHeader>
                <IonToolbar color="danger">
                <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                <IonItem routerLink="/home">
                    <IonIcon src="assets/icon/home-icon.svg"/> 
                    <IonText>Inicio</IonText>
                </IonItem>
                <IonItem routerLink="/profile">
                    <IonIcon src="assets/icon/user-icon.svg"/> 
                    <IonText>Perfil</IonText>
                </IonItem>
                <IonItem>
                    <IonIcon src="assets/icon/add-game-icon.svg"/> 
                    <IonText>Añadir producto</IonText>
                </IonItem>
                <IonItem>
                    <IonIcon src="assets/icon/list-icon.svg"/> 
                    <IonText>Tus productos</IonText>
                </IonItem>
                <IonItem routerLink="/">
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