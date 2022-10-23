import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

export const ThemeContext = React.createContext();


export default function App() {

  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <>
      <ThemeContext.Provider>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FuntionContextComponent/>
      </ThemeContext.Provider>
    </>
  );
}

