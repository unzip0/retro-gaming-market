import axios from 'axios';

export function productsData(product = null){
    // if (product.length > 2){
        axios({
            method: 'POST',
            url: 'http://localhost:3000/products', 
            // data: {
            //     product: product
            // }       
        }).then(response => {
            if (response.data.length > 0){
                return response.data;
                console.log(response.data);
            }
            return [];
        }).catch(error => {
            console.log(error);
            return [];
        });
    // }
}