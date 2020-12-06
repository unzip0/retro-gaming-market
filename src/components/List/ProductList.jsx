import React from 'react';
import { IonList, IonItem, IonLabel, IonAvatar } from '@ionic/react';
import './ProductList.css';
const _URL = require("../../config/url.config.js");

export const ProductList = ({products}) => {
    return (
        <IonList>
            {
                products.map(product => {
                    return(
                        <IonItem
                            onclick={()=> {}} 
                            key={product.id}>
                            <IonAvatar 
                                slot="start" 
                                class="md hydrated product-avatar-list"
                            >
                               <img src={`${_URL.IMAGES}${product.image_path}`} alt=""/>
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
