import './ItemCart.css'
import CartContext from '../../context/CartContext'
import { useContext } from 'react'

const ItemCart = ({ id, price, name}) => {
    const {cart, removeItem } = useContext(CartContext)
    return(
        <section>
            <ul className="list-cart">
                <li>{name}</li>
                <li>{price}</li>
                <button className='btnEliminar' onClick={() => removeItem(id)}>Eliminar</button>
            </ul>
            
        </section>
        
    )
}
export default ItemCart