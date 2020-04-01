import React, { useState } from 'react';
import { IonPage, IonContent, IonButton, IonInput, IonImg, IonGrid, IonRow, IonCol } from "@ionic/react"
import './Login.css';
import axios from 'axios';
import { RouteComponentProps, withRouter  } from "react-router";



const Login: React.FC<RouteComponentProps> = ({ history }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function loginUser() {
        axios({
            method: 'post',
            url: 'http://localhost:3000/login',
            data: {
                username: username
                , password: password
            }

        }).then(response => {
            if (response.data.length > 0){
                console.log('logged');
                history.push('/home');
            }
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <IonPage>
            <IonContent class="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonImg class="logo" src="assets/images/rgm.jpg"/>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonInput 
                                placeholder="Usuario" 
                                onIonChange={(e: any) => setUsername(e.target.value)}
                                color="light"
                            />
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonInput 
                                type="password" 
                                onIonChange={(e: any) => setPassword(e.target.value)}
                                placeholder="Password" 
                                color="light"
                            />
                        </IonCol>
                    </IonRow>
                    <IonRow> 
                        <IonCol class="ion-text-center">
                            <IonButton color="danger" onClick={loginUser}>Login</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default withRouter(Login)