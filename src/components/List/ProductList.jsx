import React from 'react';
import { IonList, IonItem, IonLabel, IonAvatar, IonListHeader } from '@ionic/react';
import './ProductList.css';
const _URL = require("../../config/url.config.js");

export const ProductList = ({products}) => {

    const getItemData = (product) => {
        console.log(product);
    };

    return (
        <IonList>
            <IonListHeader>
                <IonLabel>Productos disponibles</IonLabel>
            </IonListHeader>
            {
                products.map(product => {
                    return(
                        <IonItem
                            onClick={() => getItemData(product)} 
                            key={product.id}>
                            <IonAvatar 
                                slot="start" 
                                class="md hydrated product-avatar-list"
                            >
                               <img src={product.image_path ? `${_URL.IMAGES}${product.image_path}` : '/assets/images/rgm.jpg'} alt=""/>
                            </IonAvatar>
                            <IonLabel>
                                <h2>{product.name}</h2>
                                <h3>{product.platform} ({product.region})</h3>
                                <p>{product.release_date}</p>
                            </IonLabel>
                        </IonItem>
                    );
                })
            }
        </IonList>
    );

};
