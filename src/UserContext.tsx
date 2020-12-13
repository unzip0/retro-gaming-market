import { createContext, Dispatch, SetStateAction } from 'react';

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
    setUser: Dispatch<SetStateAction<User|undefined>>
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
    setUser: (info_user) => { }
});
