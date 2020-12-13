import React, { FunctionComponent, useState } from 'react';
import { IonAlert } from '@ionic/react';


export const Alert: FunctionComponent<any> = ({ header, subHeader, message} : any) => {

    const [show, setShow] = useState(true);
    
    return (
        <IonAlert
            isOpen={show}
            onDidDismiss={() => setShow(false)}
            cssClass='my-custom-class'
            header={header}
            subHeader={subHeader}
            message={message}
            buttons={['OK']}
        />
    );

};