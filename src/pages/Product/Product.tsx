import React, { useState } from 'react';
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonInput, IonSelect, IonSelectOption, IonSearchbar } from "@ionic/react";
import { RouteComponentProps, withRouter  } from "react-router";
import Header from '../../components/Header/Header';
import './Product.css';
import { useProductFetch } from '../../hooks/useProductFetch';
import { ProductList } from '../../components/List/ProductList';

const Product: React.FC<RouteComponentProps> = () => {
    const [ cantidad, setCantidad ] = useState('')
    const [ precio, setPrecio ] = useState('')
    const [ condicion, setCondicion ] = useState('')
    const [ producto, setProducto ] = useState('')
    const [ searchText, setSearchText ] = useState('');

    const {data, loading} = useProductFetch(searchText);
    console.log('data', data);
    return (
        <IonPage>
            <Header/>
            <IonSearchbar 
                value={searchText}
                onIonChange={(e : any) => setSearchText(e.target.value)}
                placeholder="Introduce el nombre del producto"
            />
            <IonContent >
              
                { !loading && searchText.length > 0 && <ProductList products={data} /> }
                {/* <IonGrid>
                    <IonRow>
                        <IonCol>
                           <IonInput 
                                type="text"
                                placeholder="Nombre del producto" 
                                readonly
                                color="light"
                            />
                        </IonCol>
                        <IonCol>
                            <IonInput 
                                value={cantidad}
                                type="number"
                                placeholder="Cantidad" 
                                onIonChange={(e: any) => setCantidad(e.target.value)}
                                color="light"
                            />
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonInput
                                value={precio} 
                                type="number"
                                placeholder="Precio" 
                                onIonChange={(e: any) => setPrecio(e.target.value)}
                                color="light"
                            />
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
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
                </IonGrid> */}
            </IonContent>
        </IonPage>
    )
}

export default withRouter(Product)