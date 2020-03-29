import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonContent, IonToolbar, IonTitle, IonButton } from "@ionic/react"




const Login: React.FC = () => {
    const [input, setInput] = useState<string>('')

    useEffect(() => {
        console.log(input)
    }, [input])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>HOME PAGE</IonTitle>
                </IonToolbar>
                <IonContent className="ion-padding">
                    <IonButton routerLink="/login">Login</IonButton>
                </IonContent>
            </IonHeader>
        </IonPage>
    )
}

export default Login