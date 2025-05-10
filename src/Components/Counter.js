import React, { useState, useEffect } from "react" //useEffect permite agregar efectos secundarios en el componente como por ejemplo llamadas a una api, movimientos, etc || useState sirve para guardar y actualizar datos dentro del componente (por ejemplo, contar clics, manejar un formulario, etc.).

const Counter = (initialValue) => {
    
    const [count, setCount] = useState(initialValue); //Asi es como se define una variable de estado || count es la variable del estado actual, como se encuentra en ese momento antes de volverse a rederizar || setCount es la actualizacion de la variable con el nuevo valor que debe presentarse en la nueva renderizacion.
    const [lastAction, setLastAction] = useState(null);

    useEffect(()=> {
        document.title = `Contador: ${count}`;
        return() => {
            document.title = 'React App';
        };
    }, [count]);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
        setLastAction('incremento');
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
        setLastAction('decremento');
    };

    const reset = () => {
        setCount(initialValue)
        setLastAction('reinicio')
    };
    
    return (
        <div className="counter">
            <h2>Componente contador</h2>
            <p>Valor actual: {count}</p>
            {lastAction && <p>Ultima accion: {lastAction}</p>}
        

            <div className="counter-buttons">
                <button onClick={decrement}>-</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increment}>+</button>
            </div>

        </div>
    )
}

export default Counter

