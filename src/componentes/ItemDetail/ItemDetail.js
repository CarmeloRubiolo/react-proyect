import './ItemDetail.css'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'
import { useNotification } from '../../notification/Notification'

const ItemDetail = ({id, img, name, description, price, stock, initial, onAdd}) => {

    const { addItem, isInCart } = useContext(CartContext)

    const { setNotification } = useNotification()
    
    const handleOnAdd = (count) => {

        const productObj = {id, name, price}

        addItem({...productObj, quantity: count})
        setNotification('success', `Se agregó ${name} al carrito`)

    }

    return (
        <div className="card mb-3 border-0 center" >
            <div className="row g-0 card-detail">
                <div className="img-detail">
                    <img src={img} className="img-fluid rounded-start" alt={name}/>
                    
                </div>
                <div className="" >
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <div className="card-description">
                            <div className="card-description-jr">
                                <p className="card-text">{description}</p>
                                <p className="card-text"><small>$ {price}</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="card-detail-footer">
                        { isInCart(id) ? <Link className='btnFinalizarCompra' to='/cart'>Finalizar compra</Link> : <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />}
                    </div>  
                </div>
            </div>
            <div className="backToInicio">
                <Link className="button-detail" to='/list'>Volver</Link>
            </div> 
        </div>
    )
}
export default ItemDetail