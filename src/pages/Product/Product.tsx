import React, { useState } from 'react';
import { IonPage, IonContent,  IonSearchbar } from '@ionic/react';
import { RouteComponentProps, withRouter  } from "react-router";
import Header from '../../components/Header/Header';
import { useProductFetch } from '../../hooks/useProductFetch';
import { ProductList } from '../../components/List/ProductList';
import { ProductForm } from '../../components/Form/ProductForm';
import './Product.css';

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
        setProducto(product);
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
                    producto.id !== ''  && 
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