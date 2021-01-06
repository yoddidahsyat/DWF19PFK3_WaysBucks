import {createContext, useReducer} from 'react';
import Users from '../data/Users.json';

export const AppContext = createContext();

const initialState = {
    isLogin: false,
    carts: []
}

const auth = (form) => {
    // cari data user di dalam users berdasarkan email dari form
    const user = Users.find((user) => user.email === form.email);
    // jika ada, cocokkan password
    if (user) {
        // jika password cocok return data user, jika tidak cocok return false
        if (user.password === form.password) {
            return user;
        }
    }
    // jika tidak ada, return false
    return false;
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_CART":
            const addedCarts = [...state.carts];
            addedCarts.push(action.payload);
            return {
                ...state,
                carts: [...addedCarts]
            }
            
        case "REMOVE_CART":
            const newCarts = [...state.carts];
            newCarts.splice(action.payload, 1);
            return {
                ...state,
                carts: [...newCarts]
            }

        case "LOGIN":
            const user = auth(action.payload);
            if (!user) {
                alert('Your email or password is invalid');
                return {...state}
            }
            return {
                ...state,
                user,
                isLogin: true
            }

        case "LOGOUT":
            return {
                ...state,
                isLogin: false,
                user: {}
            }

        case "REGISTER":
            return {
                ...state,
                isLogin: true,
                user: {
                    role: "user"
                }
            }
        default:
            throw new Error();
    }
}

export const AppContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {props.children}
        </AppContext.Provider>
    );
};