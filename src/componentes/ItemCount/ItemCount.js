import { useState } from 'react';
import "./ItemCount.css";

const Counter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        if(count >= 1){
          setCount(count - 1)  
        }
        
    }

    const increment = () => {
        if(count <= 0){
           setCount(count + 1) 
        }
        
    }

    return (
        <div className="counterFull">
            <div className="counter">
                <button className="decrement" onClick={decrement}>-</button>
                <p>{count}</p>
                <button className="increment" onClick={increment}>+</button>
            </div>
            <div>
                <button className="btnAgregar" onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )

}
export default Counter