import React from 'react';
import { IonList, IonItem, IonLabel, IonAvatar, IonListHeader } from '@ionic/react';
import './ProductList.css';
const _URL = require("../../config/url.config.js");

export const ProductList = ({products, selectedProduct}) => {

    const getItemData = (product) => {
        selectedProduct({
            id: product.id,
            name: product.name,
            platform: product.platform,
            region: product.region,
            release_date: product.release_date,
            cantidad: '',
            precio: '',
            condicion_juego: '',
            condicion_extras: '',
            condicion_caja: '',
            condicion_caratula: '',
            condicion_manual: '',
            image_path: product.image_path
        });
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
                               <img src={product.image_path ? `${_URL.IMAGES}${product.image_path}` : `${_URL.IMAGE_NOT_FOUND}`} alt=""/>
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
