import React from 'react';
import { IonGrid, IonRow, IonCol, IonInput, IonImg, IonButton } from '@ionic/react';
import { ConditionSelect } from '../Select/ConditionSelect';
const _URL = require("../../config/url.config.js");

export const ProductForm = ({producto, changeProductState, handleChange}) => {
    return (
        <form>
            <IonGrid>
                <IonRow>
                    <IonCol>
                    <IonImg 
                        src={producto.image_path ? `${_URL.IMAGES}${producto.image_path}` : `${_URL.IMAGE_NOT_FOUND}`}
                        />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonInput
                            name="name" 
                            type="text"
                            placeholder="Nombre del producto" 
                            readonly
                            color="light"
                            value={producto.name}
                        />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonInput 
                            name="quantity"
                            value={producto.cantidad}
                            type="number"
                            placeholder="Cantidad" 
                            onIonChange={(e: any) => changeProductState('cantidad', e.target.value)}
                            color="light"
                        />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonInput
                            name="price"
                            value={producto.precio} 
                            type="number"
                            placeholder="Precio" 
                            onIonChange={(e: any) => changeProductState('precio', e.target.value)}
                            color="light"
                        />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <ConditionSelect 
                            name="game_condition" 
                            value={producto.condicion_juego} 
                            placeholder="Condición del juego" 
                            field="condicion_juego" 
                            onChange={handleChange}
                        />
                        <br/>
                        <ConditionSelect 
                            name="extra_condition" 
                            value={producto.condicion_extras} 
                            placeholder="Condición de los extras" 
                            field="condicion_extras" 
                            onChange={handleChange}
                        />
                        <br/>
                        <ConditionSelect 
                            name="box_condition" 
                            value={producto.condicion_caja} 
                            placeholder="Condición de caja" 
                            field="condicion_caja" 
                            onChange={handleChange}
                        />
                        <br/>
                        <ConditionSelect 
                            name="cover_condition" 
                            value={producto.condicion_caratula} 
                            placeholder="Condición de carátula" 
                            field="condicion_caratula" 
                            onChange={handleChange}
                        />
                        <br/>
                        <ConditionSelect 
                            name="manual_condition" 
                            value={producto.condicion_manual} 
                            placeholder="Condición del manual" 
                            field="condicion_manual" 
                            onChange={handleChange}
                        />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton 
                            expand="full"
                            color="danger" 
                            type="submit"
                        >
                            Añadir producto
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </form>
    )
}
