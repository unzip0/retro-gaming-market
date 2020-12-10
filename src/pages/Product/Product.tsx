import React, { useState } from 'react';
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonInput, IonSearchbar, IonImg, IonButton } from '@ionic/react';
import { RouteComponentProps, withRouter  } from "react-router";
import Header from '../../components/Header/Header';
import './Product.css';
import { useProductFetch } from '../../hooks/useProductFetch';
import { ProductList } from '../../components/List/ProductList';
import { ProductForm } from '../../components/Form/ProductForm';

const Product: React.FC<RouteComponentProps> = () => {

    const initialState = {
        id: '',
        name: '',
        platform: '',
        region: '',
        release_date: '',
        cantidad: '',
        precio: '',
        condicion_juego: '',
        condicion_extras: '',
        condicion_caja: '',
        condicion_caratula: '',
        condicion_manual: '',
        image_path: ''
    };

    const [ producto, setProducto] = useState(initialState);
    const [ searchText, setSearchText ] = useState('');

    const handleSelectedProduct = (product) => {
        setProducto({
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
    }

    const handleChange = (field, value) => {
        changeProductState(field, value);
    };

    const changeProductState = (field, value) => {
        let items = {...producto};
        items[field] = value;
        setProducto(items);
    }

    const {data, loading} = useProductFetch(searchText);
    
    return (
        <IonPage>
            <Header/>
            <IonSearchbar 
                value={searchText}
                onIonChange={(e : any) => {
                    setSearchText(e.target.value);
                    setProducto(initialState);
                }}
                placeholder="Introduce el nombre del producto"
                onIonClear={() => setProducto(initialState)}
            />
            <IonContent >
                { 
                    !loading && searchText.length > 4 && producto.id === '' && 
                    <ProductList 
                        products={data} 
                        selectedProduct={handleSelectedProduct} 
                    /> 
                }
                {
                    producto.id !== '' && searchText.length > 4 && 
                    <ProductForm 
                        producto={producto} 
                        changeProductState={changeProductState} 
                        handleChange={handleChange}
                    />
                }
            </IonContent>
        </IonPage>
    )
}

export default withRouter(Product)