import "./App.css";
import React, { useState } from "react";
import Counter from "./Components/Counter";
import UserProfile from "./Components/UserProfile";
import ThemeContext from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState('ligth');

  const [user, setUser] = useState({
    name: 'Goku',
    email: 'gokussj@dragonball.com',
    role: 'Profesor'
  });

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  return (
    <>
    <ThemeContext.Provider value={{theme, toggleTheme}}> 
      <div className={`App ${theme}`}>
        <header className='App-header'>
          <h1>React App</h1>
          <button onClick={toggleTheme}>Cambiar tema: {theme === 'light' ? 'oscuro' : 'claro'}</button>
        </header>
        <main className='App-main'>
          <Counter initialValue={0} />
          <UserProfile user={user} updateUser={setUser} />
        </main>
      </div>
    </ThemeContext.Provider>
      
    </>


  )
}

export default App;
