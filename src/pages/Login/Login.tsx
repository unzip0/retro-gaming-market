import React, { useContext, useState } from 'react';
import { IonPage, IonContent, IonButton, IonInput, IonImg, IonGrid, IonRow, IonCol } from "@ionic/react"
import { RouteComponentProps, withRouter  } from "react-router";
import { UserContext } from '../../context/UserContext';
import { Alert } from '../../components/Alert/Alert';
import { getLogin } from '../../helpers/getLogin';
import './Login.css';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alert, setAlert] = useState(false);
    const { updateUser } = useContext(UserContext);
    
    const handleLogin = () => {
        getLogin(username, password)
            .then( response => {
                if (response.code > 0){
                    updateUser({
                        id: response.data.id,
                        email: response.data.email,
                        name: response.data.first_name,
                        last_name: response.data.last_name,
                        user_name: response.data.user_name,
                        phone: response.data.phone,
                    });
                    history.push('/home');
                }else{
                    setAlert(true);
                }
            });
    };

    const handleAlert = (alert) => {
        setAlert(alert);
    }

    return (
        <IonPage>
            <IonContent class="ion-padding">
                { alert && <Alert header='Login' subHeader='Error de login' message='Credenciales no encontradas' shown={handleAlert}/>}
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
                                onClick={handleLogin}
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