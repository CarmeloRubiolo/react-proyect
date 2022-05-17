import { useContext, useState, useEffect } from 'react';
import CartContext from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import './Cart.css'
import { Link } from 'react-router-dom'
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../service/firebase/index'


const Cart = () => {

    /* const [loading, setLoading] = useState(false) */

    const { cart, removeItem, getQuantity, getTotal } =useContext(CartContext)

/*     const createOrder = () => {
        setLoading(true)
        const objOrder = {
            items: cart,
            buyer: {
                name: 'Carmelo Rubiolo',
                phone: ' 3516661656',
                email: 'melo_rubiolo@hotmail.com'
            },
            total: getTotal(),
            date: new Date()
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids)))
            .then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find( prod => prod.id === doc.id)?.getQuantity
                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                    }else {
                        outOfStock.push({id: doc.id, ...dataDoc})
                    }
                })
            }).then( () => {
                if(outOfStock.length === 0) {
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder)
                } else {
                    return Promise.reject({ name: 'outOfStockError', products: outOfStock})
                }
            }).then(( { id }) => {
                batch.commit()
                console.log(`El id de la orden es ${id}`)
            }).catch(error => {
                console.log(error)
            }).finally( () => {
                setLoading(false)
    })
    }
    if(loading) {
        return (
            <h1>Se está generando su orden</h1>
        )
    }

 */
    
    if(getQuantity() === 0) {
        return(
            <div>
                <h1 className='dont-element'>No hay elementos en el carrito</h1>
                <div className="btn-buildCardMaster">
                    <button className='btn-buildCard'>
                        <Link to='/' className='link-BuildCard'>Arma tu tarjeta</Link>
                    </button> 
                </div> 
            </div> 
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
                    <p>Total a pagar: {getTotal()}</p>
                    <div> <Link to='/order' className="fin-compra">Finalizar compra</Link></div>
                </div>
            </div> 
        </div>
    )    
    

}
export default Cart