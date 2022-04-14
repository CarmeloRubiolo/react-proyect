import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../asyncmock";

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    

    useEffect(() => {
        getProducts().then(prods => {
            setProducts(prods)
        }).catch(error => {
        })
    }, [])

    return(
        <div>
            <h1 className="tittle">{props.greeting}</h1>
            <ItemList products={products}/>
        </div>
        
    )
}
export default ItemListContainer