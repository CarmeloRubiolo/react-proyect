import "./CartWidget.css";
import { useContext } from "react";
import CartContext from '../../context/CartContext'

const CartWidget = () => {


    const { getQuantity } = useContext(CartContext)
    return (
        <div >
            <button type="button" class=" position-relative">
                <img className="cartWidget" src='./imagenes/carro.png' /><span className="CartWidget-num" class="position-absolute top-0 start-0 translate-middle badge rounded-pill fs-6">{getQuantity()}</span>
            </button>   
        </div>         
    );
}

export default CartWidget;