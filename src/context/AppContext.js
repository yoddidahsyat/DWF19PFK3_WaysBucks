import {createContext} from 'react';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const hari = "Kamis";
    return (
        <AppContext.Provider value={[hari]}>
            {props.children}
        </AppContext.Provider>
    );
};