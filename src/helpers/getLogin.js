const _URL = require("../config/url.config.js");

export const getLogin = async( username, password ) => {
    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username, password: password})
    };
    try {
        const fetchResponse = await fetch(_URL.LOGIN, settings);
        const response = await fetchResponse.json();
        return response;
    } catch (e) {
        return {
            data: null,
            code: -10,
            message: 'Network error'
        };
    }    
}