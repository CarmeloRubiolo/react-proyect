import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({products}) => {
    return(
        <div className="card_master">
            {products.map(prod =>  <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList