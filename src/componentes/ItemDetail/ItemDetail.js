import './ItemDetail.css'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'

const ItemDetail = ({img, name, description, price, stock, initial, onAdd}) => {


    const [quantity, setQuantity] = useState(0)
    const handleOnAdd = (count) => {
        console.log(`Se agregó ${quantity} producto al carrito`)
        setQuantity(count)
      }

    return (
        <div className="card mb-3 border-0 center" >
            <div className="row g-0 card-detail">
                <div className="col-md-4 img-detail">
                    <img src={img} className="img-fluid rounded-start" alt={name}/>
                    <Link className="button-detail" to='/list'>Volver</Link>
                </div>
                <div className="col-md-8" >
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className="card-description">
                        <div className="card-description-jr">
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small>$ {price}</small></p>
                        </div>
                        
                    </div>
                    
                </div>
                <div>
                        { quantity > 0 ? <Link className='btnFinalizarCompra' to='/cart'>Finalizar compra</Link> : <ItemCount initial={0} stock={stock} onAdd={handleOnAdd} />}
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default ItemDetail