import { createContext } from "react";

export const initialContext = {
    user: {
        id: null,
        name: null,
        last_name: null,
        email: null,
        user_name: null,
        phone: null
    }
}
export const UserContext = createContext(initialContext); 