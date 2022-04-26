import { useContext, useState, useEffect } from 'react';
import CartContext from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import './Cart.css'
import { Link } from 'react-router-dom'


const Cart = () => {


    const { cart, removeItem, getQuantity } =useContext(CartContext)


    const [total, setTotal] = useState(0)
    useEffect (() => {
        const handleSumar = () => {
            const sumar = cart.map((prod) => prod.price)
            .reduce((prev, curr) => {
                return prev + curr;
            }, 0);
            setTotal(sumar)
        };
        handleSumar();
    })

    if(getQuantity() === 0) {
        return(
            <h1 className='dont-element'>No hay elementos en el carrito</h1>
        )
    }
    return(
        <div className="cartMaster">
            <div className='btn-cart'>
                <button className="btn btn-primary look-cart" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Ver carrito de compras</button>
            </div>
            <div className="offcanvas offcanvas-end cardCart" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Carrito</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <header className="header_cart">
                    <div><h4>Producto</h4></div>
                    <div><h4>Precio</h4></div>
                </header>
                <div className="offcanvas-body">
                    {cart.map(prod => <ItemCart key={prod.id} {...prod}/>)}
                    {/* <button onClick={() => removeItem(prod.id)}>Eliminar</button> */}
                </div>
                <div className='footer_cart'>
                    <p>Total a pagar: {total}</p>
                    <div> <Link to='/' className="fin-compra">Finalizar compra</Link></div>
                </div>
            </div> 
        </div>
    )    
}
export default Cart