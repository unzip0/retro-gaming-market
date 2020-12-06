// import axios from 'axios';
const _URL = require("../config/url.config.js");

export const getProducts = async( product ) => {
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({product: product})
    };
    try {
        const fetchResponse = await fetch(_URL.PRODUCT_FILTER, settings);
        const data = await fetchResponse.json();
        
        const products = data.map(prod => {
            return {
                id: prod.id,
                name: prod.name,
                platform: prod.platform,
                region: prod.region,
                release_date : prod.release_date,
                image_path: prod.image_path
            }
        });
        return products;
    } catch (e) {
        return {};
    }    
}