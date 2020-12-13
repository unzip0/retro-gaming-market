import { createContext, useState } from 'react';
import  React from 'react';

export type User = {
    id: number | null,
    name: string | null,
    last_name: string | null,
    email: string | null,
    user_name: string | null,
    phone: number | null,
}

export type UserContextType = {
    user: User|undefined,
    updateUser: (user: User)=> void
}

export const UserContext = createContext<UserContextType>({ 
    user: {
        id: null,
        name: null,
        last_name: null,
        email: null,
        user_name: null,
        phone: null
    }, 
    updateUser: (user: User) => { }
});

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        id: null,
        name: null,
        last_name: null,
        email: null,
        user_name: null,
        phone: null
    });

    const updateUser = (user) => {
        setUser(user);
    };

    return  <UserContext.Provider value={{user, updateUser}}>
        { children }
    </UserContext.Provider>
}
