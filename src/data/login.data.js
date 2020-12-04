
import axios from 'axios';
const _URL = require("../config/url.config.js");

export const login = (username, password, history) => {
    axios({
        method: 'POST',
        url: _URL.LOGIN,
        data: {
            username: username
            , password: password
        }

    }).then(response => {
        console.log(response.data.length);
        if (response.data.length > 0){
            console.log('logged');
            // context.loggedIn = true;
            history.push('/home');
        }
        console.log(response);
    }).catch(error => {
        console.log(error);
    });
}