import "./Order.css"
import CartContext from "../../context/CartContext"
import { useContext, useState } from "react"
import { firestoreDb} from '../../service/firebase/index'
import { collection, addDoc, getDocs, where, query,documentId, writeBatch } from "firebase/firestore"
import { Link } from 'react-router-dom'


//seteo el form vacio
const buyerForm= {
    name:"",
    telephone:"",
    email: "",
    surname:"",
}


const Order = () => {
    // requiero las funciones de context que voy a utilizar.
    const { cart, clearCart ,getTotal } = useContext(CartContext)
    //seteo estados a utilizar.
    const [buyer, setBuyer] = useState(buyerForm)
    const [orderStatus, setOrderStatus] = useState(null)
    const [orderId, setOrderId] = useState(null)

    //capturo info del formulario a través de e.target
    const getForm = (e) => {
        const { name, value } = e.target;
        setBuyer({...buyer, [name]: value})
    }

    //reinicio datos cuando se envia el formulario
    const orderConfirmed = () => {
        setBuyer(buyerForm);
        clearCart()
        setOrderStatus('confirmado')
    }

    //Para crear order en FIREBASE
    const createOrder = async  () => {
    setOrderStatus('procesando')    
    const order = {
        ItemsOrder: cart.map(p=> {return ({id: p.id, price: p.price })}),
        form: buyer,
        total: getTotal(),
        date: new Date()
    }
    const collectionRefOrder = collection(firestoreDb, 'orders')
        setOrderId(( await addDoc(collectionRefOrder, order)).id)
        orderConfirmed(orderId)

}
//Para bajar stock en FIREBASE
const outStock = () =>{
    const ids = cart.map(p => p.id)
    const batch = writeBatch(firestoreDb);
    const collectionRefStock = collection(firestoreDb, 'products');

    getDocs(query(collectionRefStock, where(documentId(), 'in', ids)))
        .then(response =>{
            response.docs.forEach(doc=>{
                const dataDoc = doc.data()
                const prodQuantity = cart.find(p=> p.id === doc.id)?.quantity // trae la cantidad donde los id son iguales. 

                if(dataDoc.stock >= prodQuantity) {
                    batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
                    batch.commit()
                }
            })
        }).catch(err =>{
            console.log(err)
        })

}
const orderAndStock = () =>{
    createOrder();
    outStock();
}

if(orderStatus === 'confirmado') {
    return(
        <div className="cardMaster">
            <div className="card-finalizada">
                <div>
                    <h1 className="card-text card-h1">¡¡ Gracias por tu compra !!</h1>
                </div>
                <p className="card-text">Tu numero de orden es: <span className="card-order">{orderId}</span></p>
                <h5>Tomá nota de tu orden</h5>
                <div className="card-btn">
                    <button><Link to='/' id="card-btn-inicio">Pagina Principal</Link></button>
                </div>
            </div> 
        </div>
    )
}else if(orderStatus === 'procesando'){
    return(
        <div className="procesando-orden">
            <div class="loading">
                <div class="d1"></div>
                <div class="d2"></div>
            </div>
        </div>
    )
}

    return(
            <div className="">
                <form className="master needs-validation">
                    <div className="form-master row">
                        <div className="form-element col-12">
                            <label>Nombre:</label>
                            <input  type="text"
                                    name="name"
                                    value={buyer.name}
                                    onChange={getForm}
                                    className="form-input" 
                                    placeholder="Escribí tu nombre"
                                    required/>
                        </div>
                        <div className="form-element col-12">
                            <label>Apellido:</label>
                            <input  type="text"
                                    name="surname"
                                    value={buyer.surname}
                                    onChange={getForm}
                                    className="form-input" 
                                    placeholder="Escribí tu apellido"
                                    required/>
                        </div>
                        <div className="form-element col-12">
                            <label>Teléfono:</label>
                            <input type="text"
                                    name="telephone"
                                    value={buyer.telephone}
                                    onChange={getForm}
                                    className="form-input" 
                                    placeholder="Escribí tu telefono" 
                                    required/>
                        </div>
                        <div className="form-element col-12">
                            <label>Email:</label>
                            <input type="text"
                                    name="email"
                                    value={buyer.email}
                                    onChange={getForm}
                                    className="form-input" 
                                    placeholder="Escribí tu email" 
                                    required/>
                        </div>
                        <div className="form-btn">
                            <button onClick={() => orderAndStock()}> Pedir orden </button>
                        </div>
                        
                    </div>
                </form>
            </div>
    )
}
export default Order