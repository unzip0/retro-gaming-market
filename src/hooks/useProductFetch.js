import { useState, useEffect } from 'react';
import { getProducts } from "../helpers/getProducts";

export const useProductFetch = (product) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });
    useEffect(() => {
        if (product && product.length > 4){
            getProducts(product).then(
                prods => {
                    setState({
                        data: prods,
                        loading: false
                    })
                    console.log(prods);
                }
            );
        }
      
    }, [product])
    return state;
}