import React, { useState } from 'react';
import { IonPage, IonContent, IonButton, IonInput, IonImg, IonGrid, IonRow, IonCol } from "@ionic/react"
import { RouteComponentProps, withRouter  } from "react-router";
import './Login.css';
import { login } from '../../data/login-data';
import PropTypes from 'prop-types';


const Login: React.FC<RouteComponentProps> = ({ history }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
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
                            <IonButton 
                                color="danger" 
                                onClick={
                                    () =>{ login(username, password, history) }
                                }>
                                Login
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default withRouter(Login)