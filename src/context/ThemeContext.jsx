import { createContext } from "react"; //se utiliza para crear un nuevo objeto de contexto dentro del componente que estamos creando

const ThemeContext = createContext({
  //Creamos un objeto
  theme: "light", //Representa el valor por defecto del contexto "Define un valor para el contexto que esta dentro de la app" y le damos un valor inicial que en este caso es el color light
  ToggleTheme: () => {}, //Es una funcion que va a hacer que en algun lugar superior del arbol de componentes de react se nos permita el cambio del tema "Permitira que podamos cambiar el tema de la app".
});

export default ThemeContext;
