import React, { useState } from 'react';
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonInput, IonSelect, IonSelectOption } from "@ionic/react";
import { RouteComponentProps, withRouter  } from "react-router";
import Header from '../components/Header';
import './Product.css';
// import { productsData } from '../data/products-data'; 
import axios from 'axios';
// import AutoComplete from 'react-autocomplete';



const Product: React.FC<RouteComponentProps> = () => {
    const [cantidad, setCantidad] = useState('')
    const [precio, setPrecio] = useState('')
    const [condicion, setCondicion] = useState('')
    const [producto, setProducto] = useState('')
    let products = Array();

    function getProducts(product){
        if (product.length > 2){
            axios({
                method: 'POST',
                url: 'http://localhost:3000/products', 
                data: {
                    product: product
                }       
            }).then(response => {
                if (response.data.length > 0){
                    return response.data;
                }
                return {};
            }).catch(error => {
                console.log(error);
                return [];
            });
        }
        
    }
    return (
        <IonPage>
            <Header/>
            <IonContent class="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            {/* <AutoComplete
                                items={ProductsData()}
                            /> */}
                            <IonInput 
                                type="text"
                                placeholder="Nombre del producto" 
                                onIonChange={(e: any) => getProducts(e.target.value)}
                                color="light"
                            />
                        </IonCol>
                        <IonCol class="hide">
                            <IonInput 
                                type="number"
                                placeholder="Cantidad" 
                                onIonChange={(e: any) => setCantidad(e.target.value)}
                                color="light"
                            />
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol class="hide">
                            <IonInput 
                                placeholder="Precio" 
                                onIonChange={(e: any) => setPrecio(e.target.value)}
                                color="light"
                            />
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol class="hide">
                            <IonSelect value={condicion} placeholder="Condición del juego" onIonChange={e => setCondicion(e.detail.value)}>
                                <IonSelectOption value="NEW">Nuevo</IonSelectOption>
                                <IonSelectOption value="USED-NEW">Usado como nuevo</IonSelectOption>
                                <IonSelectOption value="USED">Usado</IonSelectOption>
                                <IonSelectOption value="USED-VERY">Muy usado</IonSelectOption>
                                <IonSelectOption value="NOT-WORK">No funciona</IonSelectOption>
                                <IonSelectOption value="NOT-PRES">No tiene</IonSelectOption>
                            </IonSelect>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}

export default withRouter(Product)