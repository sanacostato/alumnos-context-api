//imrs un atajo para lo de abajo
import React, { useState } from 'react';

const ThemeContext = React.createContext({});

//exportamos un context provider, que informa a react 
export const ThemeContextProvider = ({ children }) =>{
    const [theme, setTheme] = useState('ligth');
    // esto esta en la documentacion https://reactjs.org/docs/getting-started.html
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            { children }
        </ThemeContext.Provider>
    );
};

export default ThemeContext;