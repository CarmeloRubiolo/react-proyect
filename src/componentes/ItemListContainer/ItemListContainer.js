import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
/* import { getProducts } from "../../asyncmock"; */
import { getDocs, collection } from 'firebase/firestore'
import { firestoreDb } from '../../service/firebase'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    /* const [loading, setLoading] = useState(false) */
    

    useEffect(() => {
        /* setLoading(true) */
        /*  getProducts().then(prods => {
            setProducts(prods)
        }).catch(error => {
        }) */
        getDocs(collection(firestoreDb, 'products')).then(response => {
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data()}
            })
            setProducts(products)
        })
        /* .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        }) */
        
    }, [])

    return(
        <div>
            <h1 className="tittle">{props.greeting}</h1>
            <ItemList products={products}/>
        </div>
        
    )
}
export default ItemListContainer