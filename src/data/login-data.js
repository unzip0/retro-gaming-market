
// import { useContext } from 'react';
import axios from 'axios';
// import {AppContext} from '../App';
// const context = useContext(AppContext);


export const login = (username, password, history) => {
    axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        data: {
            username: username
            , password: password
        }

    }).then(response => {
        if (response.data.length > 0){
            console.log('logged');
            // context.loggedIn = true;
            history.push('/home');
        }
        console.log(response);
    }).catch(error => {
        
        console.log(error);
    });
    // context.loggedIn = true;
    
    // history.push('/home');
    //context.loggedIn = true;
    //context.setContext(true);
    // console.log(context)
}