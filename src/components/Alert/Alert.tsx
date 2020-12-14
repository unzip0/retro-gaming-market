import React, { FunctionComponent, useState } from 'react';
import { IonAlert } from '@ionic/react';


export const Alert: FunctionComponent<any> = ({ header, subHeader, message, shown} : any) => {

    const [show, setShow] = useState(true);
    
    const handleDissmiss = () => {
        setShow(!show);
        shown(!show);
    }
    return (
        <IonAlert
            isOpen={show}
            onDidDismiss={handleDissmiss}
            cssClass='my-custom-class'
            header={header}
            subHeader={subHeader}
            message={message}
            buttons={['OK']}
        />
    );

};