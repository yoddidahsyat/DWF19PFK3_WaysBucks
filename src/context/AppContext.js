import {createContext, useReducer} from 'react';

export const AppContext = createContext();

const initialState = {
    isLogin: true,
    carts: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_CART":
            // const isProductExisted = state.carts.filter(
            //     (product) => product.id === action.payload.id
            // );
            // if (isProductExisted.length > 0) {
            //     return {
            //         ...state,
            //         carts: state.carts.map(
            //             (product) => product.id === action.payload.id ? {
            //                 ...product,
            //                 qty: product.qty + 1
            //             } : product
            //         )
            //     }
            // }
            return {
                ...state,
                carts: [
                    ...state.carts, {
                        ...action.payload
                    }
                ]
            }
            
        case "REMOVE_CART":
            return {
                ...state,
                carts: state.carts.filter(
                    (product) => product.id !== action.payload.id
                )
            }

        case "LOGIN":
            return {
                ...state,
                isLogin: true
            }

        case "LOGOUT":
            return {
                ...state,
                isLogin: false
            }

        case "REGISTER":
            return {
                ...state,
                isLogin: true
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