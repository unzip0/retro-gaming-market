import React, { useState } from 'react';
import { IonAlert, IonButton, IonContent } from '@ionic/react';



export const Alert: React.FC = () => {

    const [show, setShow] = useState(false);

    return (
        <IonAlert
            isOpen={show}
            onDidDismiss={() => setShow(false)}
            cssClass='my-custom-class'
            header={'Alert'}
            subHeader={'Subtitle'}
            message={'This is an alert message.'}
            buttons={['OK']}
        />
    );

};