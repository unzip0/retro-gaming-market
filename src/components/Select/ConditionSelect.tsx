import React from 'react';
import { IonSelect, IonSelectOption } from '@ionic/react';

export const ConditionSelect = ({name, value, placeholder, field, onChange}) => {

    const setSelected = (e) => {
        onChange(field, e);
    }

    return (
        <IonSelect
            name={name}
            value={value}
            placeholder={placeholder}
            onIonChange={e=>setSelected(e.detail.value)}
        >
            <IonSelectOption value="NEW">Nuevo</IonSelectOption>
            <IonSelectOption value="USED-NEW">Usado como nuevo</IonSelectOption>
            <IonSelectOption value="USED">Usado</IonSelectOption>
            <IonSelectOption value="USED-VERY">Muy usado</IonSelectOption>
            <IonSelectOption value="NOT-WORK">No funciona</IonSelectOption>
            <IonSelectOption value="NOT-PRES">No tiene</IonSelectOption>
        </IonSelect>
    )
}
