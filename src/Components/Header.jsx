import React, { useState, useContext } from 'react';
import ThemeContext from "../context/ThemeContext";

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const cambiarTema = () => {
        // if terneario se identifica por ? y :
        setTheme(theme === 'light' ? 'dark' : 'light')
        //si esta light lo pone dark y si no lo pone light
    };

    const btnClass = theme === 'dark' ? 'btn btn-outline-light' : 'btn btn-outline-dark'

    const textClass = theme === 'dark' ? 'text-light' : 'text-dark'

    const textBtn = theme === 'dark' ? 'text-light' : 'text-dark'
    return (
        <div className="row p-2">
            <div className="col-6 text-start">
                <h1 className='text-danger'>Ejercicio Context</h1>
                <p className={textClass}>El tema actual es: {theme}</p>
            </div>

            <div className="col-6 text-end">
                <button type="buttom" className={btnClass} onClick={cambiarTema}>
                    {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
                </button>
            </div>
        </div>
    );
}

export default Header;