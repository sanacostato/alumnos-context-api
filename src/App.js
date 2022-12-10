import './App.css';
import Cards from './Components/Cards';
import Header from './Components/Header';
import ThemeContext from './context/ThemeContext';
import { useContext } from 'react';

function App() {
  const {theme,setTheme} = useContext(ThemeContext);
  return (
    // con ese div cambia de color de blanco a negro, importando themcontext y usecontext
    <div className={theme === 'dark' ? 'bg-dark' : 'bg-light'}>
      <Header/>
      <Cards/>
    </div>
  );
}

export default App;
