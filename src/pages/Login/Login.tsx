import React, { useContext, useState } from 'react';
import { IonPage, IonContent, IonButton, IonInput, IonImg, IonGrid, IonRow, IonCol } from "@ionic/react"
import { RouteComponentProps, withRouter  } from "react-router";
import './Login.css';
import axios from 'axios';
import { UserContext } from './UserContext';
const _URL = require("../../config/url.config.js");


const Login: React.FC<RouteComponentProps> = ({ history }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { user } = useContext(UserContext);
    
    const login = () => {
        axios({
            method: 'POST',
            url: _URL.LOGIN,
            data: {
                username: username
                , password: password
            }
    
        }).then(response => {
            if (response.data.code === 1){
                user.id = response.data.data.id;
                user.email = response.data.data.email;
                user.name = response.data.data.first_name;
                user.last_name = response.data.data.last_name;
                user.user_name = response.data.data.user_name;
                user.phone = response.data.data.phone;
                history.push('/home');
            }
            
        }).catch(error => {
            console.log(error);
        });
    };

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
                                onClick={login}
                            >
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